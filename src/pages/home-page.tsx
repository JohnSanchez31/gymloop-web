import { siteConfig } from "@/config/site";
import { Hero } from "@/features/home/hero";
import { FeatureSection } from "@/features/home/feature-section";
import { AppShowcase } from "@/features/home/app-showcase";
import { PlansSection } from "@/features/home/plans-section";
import { ContactSection } from "@/features/home/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureSection
        id="por-que"
        eyebrow="Para tu gimnasio"
        title="¿Por qué tener GYMPlus en tu gym?"
        description="Una app que moderniza tu gimnasio, ahorra tiempo a tus coaches y mejora cada entrenamiento."
        features={siteConfig.gymBenefits}
        muted
      />
      <FeatureSection
        id="clientes"
        eyebrow="Para clientes"
        title="Todo tu entrenamiento en tu bolsillo"
        description="Planifica, entrena y mide tu progreso sin papeles ni hojas de cálculo."
        features={siteConfig.clientFeatures}
      />
      <FeatureSection
        id="coaches"
        eyebrow="Para coaches"
        title="Acompaña a tus clientes de cerca"
        description="Responde solicitudes y registra mediciones sin salir de la app."
        features={siteConfig.coachFeatures}
        muted
      />
      <AppShowcase />
      <PlansSection />
      <ContactSection />
    </>
  );
}
