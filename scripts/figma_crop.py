#!/usr/bin/env python3
"""Découpe des images de la maquette Figma à partir d'une capture pleine page.

Le serveur Figma ne nous laisse pas télécharger les fichiers d'origine depuis
cet environnement : on découpe donc les éléments dans la capture 1x de la page,
en s'aidant des coordonnées du XML « sparse » renvoyé par get_design_context.

Usage :
  # lister les éléments (id, nom, boîte absolue)
  python3 scripts/figma_crop.py list  design/accueil.xml [--grep texte]

  # découper un ou plusieurs nœuds (id=chemin_sortie)
  python3 scripts/figma_crop.py crop  design/accueil.xml design/accueil.png \
      394:2537=public/img/accueil/hero.jpg 395:3984=public/img/accueil/jeunes.jpg

  # découper une zone (x,y,w,h en px de la page)
  python3 scripts/figma_crop.py box design/accueil.png 100,32,64,64 public/img/common/logo.png

  # transformer une icône monochrome en masque (PNG transparent, noir + alpha)
  # bg = couleur du fond autour de l'icône dans la capture
  python3 scripts/figma_crop.py mask design/accueil.png 800,50,30,28 '#feefe2' public/img/common/paw.png

Les coordonnées XML sont relatives au parent : on les additionne. Le nœud racine
(la page) est l'origine (0,0). Les .jpg sont enregistrés en qualité 90.
"""
import re
import sys
import xml.etree.ElementTree as ET

from PIL import Image


def load_tree(path):
    raw = open(path, encoding="utf-8").read()
    start = raw.find("<")
    end = raw.rfind(">")
    raw = raw[start : end + 1]
    # le XML contient des entités HTML (&#39;) : ET les gère ; on protège les & isolés
    raw = re.sub(r"&(?!#?\w+;)", "&amp;", raw)
    return ET.fromstring(raw)


def boxes(root):
    out = {}

    def walk(node, ox, oy, depth):
        x = float(node.get("x", 0))
        y = float(node.get("y", 0))
        ax, ay = (0.0, 0.0) if depth == 0 else (ox + x, oy + y)
        w = float(node.get("width", 0))
        h = float(node.get("height", 0))
        out[node.get("id")] = (node.tag, node.get("name", ""), ax, ay, w, h, depth)
        for child in node:
            walk(child, ax, ay, depth + 1)

    walk(root, 0, 0, 0)
    return out


def save(img, path):
    if path.lower().endswith((".jpg", ".jpeg")):
        img.convert("RGB").save(path, quality=90, optimize=True)
    else:
        img.save(path, optimize=True)


def main():
    cmd = sys.argv[1]
    if cmd == "list":
        root = load_tree(sys.argv[2])
        grep = None
        if "--grep" in sys.argv:
            grep = sys.argv[sys.argv.index("--grep") + 1].lower()
        for nid, (tag, name, x, y, w, h, d) in boxes(root).items():
            if grep and grep not in name.lower() and grep not in tag:
                continue
            print(f"{'  ' * d}{tag} {nid} [{x:.0f},{y:.0f} {w:.0f}x{h:.0f}] {name[:80]}")
    elif cmd == "crop":
        root = load_tree(sys.argv[2])
        img = Image.open(sys.argv[3])
        b = boxes(root)
        for spec in sys.argv[4:]:
            nid, out = spec.split("=", 1)
            _, name, x, y, w, h, _ = b[nid]
            box = (round(x), round(y), round(x + w), round(y + h))
            save(img.crop(box), out)
            print(f"{nid} {box} -> {out}")
    elif cmd == "box":
        img = Image.open(sys.argv[2])
        x, y, w, h = [float(v) for v in sys.argv[3].split(",")]
        save(img.crop((round(x), round(y), round(x + w), round(y + h))), sys.argv[4])
        print("ok", sys.argv[4])
    elif cmd == "mask":
        img = Image.open(sys.argv[2]).convert("RGB")
        x, y, w, h = [float(v) for v in sys.argv[3].split(",")]
        crop = img.crop((round(x), round(y), round(x + w), round(y + h)))
        bg = tuple(int(sys.argv[4].lstrip("#")[i : i + 2], 16) for i in (0, 2, 4))
        # couleur de l'icône = pixel le plus éloigné du fond
        px = list(crop.getdata())
        dist = lambda p: sum((a - b) ** 2 for a, b in zip(p, bg)) ** 0.5
        fg = max(px, key=dist)
        full = dist(fg) or 1
        out = Image.new("RGBA", crop.size)
        out.putdata([(0, 0, 0, max(0, min(255, round(255 * dist(p) / full)))) for p in px])
        save(out, sys.argv[5])
        print("mask ok", sys.argv[5], "couleur icône", "#%02x%02x%02x" % fg)
    else:
        print(__doc__)


if __name__ == "__main__":
    main()
