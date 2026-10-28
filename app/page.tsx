import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <section className="container section"><h1 className="h1">Accueil — en construction</h1></section>
      <Faq title={<><em>Questions fréquentes</em> sur l&apos;accompagnement parental et la plateforme Bappoum</>} items={[{ q: "Comment se déroule une séance découverte offerte ?", a: "Réponse à compléter." }]} />
      <CtaBand />
    </>
  );
}
