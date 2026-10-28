import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@fontsource/baloo-2/400.css";
import "@fontsource/baloo-2/500.css";
import "@fontsource/baloo-2/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bavardons Parentalité – Accompagnement parental bienveillant",
    template: "%s · Bavardons Parentalité",
  },
  description:
    "Accompagnement parental bienveillant pour les parents d'enfants de 0 à 18 ans : Bappoum, coaching individuel, ateliers et interventions en entreprise.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#feefe2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/img/common/logo.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
