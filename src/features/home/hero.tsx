import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { StoreButtons } from "./store-buttons";

export function Hero() {
  const { hero } = siteConfig;
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{hero.eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{hero.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">{hero.description}</p>
        <div className="mt-8 space-y-4">
          <StoreButtons />
          <p className="text-sm text-muted-foreground">
            ¿Tienes un gimnasio?{" "}
            <Link to="/#contacto" className="text-primary underline">
              Hablemos
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
