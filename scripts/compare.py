#!/usr/bin/env python3
"""Capture une page du site à 1920 px et la place à côté de la maquette.

  python3 scripts/compare.py /approche design/approche.png out.png [--port 3200] [--from Y --to Y]

Produit une image côte à côte (gauche = maquette, droite = site) réduite à 50 %,
éventuellement limitée à une bande verticale [from, to] pour inspecter une section.
Le serveur Next doit tourner (npx next start -p 3200).
"""
import sys, asyncio
from PIL import Image
from playwright.async_api import async_playwright

args = sys.argv[1:]
path, design, out = args[0], args[1], args[2]
port = args[args.index("--port") + 1] if "--port" in args else "3200"
y0 = int(args[args.index("--from") + 1]) if "--from" in args else None
y1 = int(args[args.index("--to") + 1]) if "--to" in args else None
width = int(args[args.index("--width") + 1]) if "--width" in args else 1920

async def shot():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": width, "height": 1000})
        await pg.goto(f"http://localhost:{port}{path}", wait_until="networkidle")
        await pg.evaluate("document.fonts.ready")
        # force le chargement des images lazy
        await pg.evaluate("document.querySelectorAll('img[loading=lazy]').forEach(i => i.loading = 'eager')")
        await pg.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await pg.wait_for_timeout(800)
        await pg.evaluate("window.scrollTo(0, 0)")
        await pg.wait_for_timeout(300)
        await pg.screenshot(path="/tmp/_site.png", full_page=True)
        await b.close()

asyncio.run(shot())
site = Image.open("/tmp/_site.png").convert("RGB")
if width != 1920:
    site.save(out); print("site only", site.size); sys.exit()
d = Image.open(design).convert("RGB")
print("maquette", d.size, "site", site.size)
if y0 is not None:
    d = d.crop((0, y0, d.width, min(y1, d.height)))
    site = site.crop((0, y0, site.width, min(y1, site.height)))
h = max(d.height, site.height)
canvas = Image.new("RGB", (d.width + site.width + 20, h), "white")
canvas.paste(d, (0, 0)); canvas.paste(site, (d.width + 20, 0))
canvas = canvas.resize((canvas.width // 2, canvas.height // 2))
canvas.save(out)
print("->", out)
