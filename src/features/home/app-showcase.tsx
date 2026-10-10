import { siteConfig } from "@/config/site";
import { StoreButtons } from "./store-buttons";

export function AppShowcase() {
  return (
    <section id="app" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold">Así se ve GYMPlus</h2>
        <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
          {siteConfig.screenshots.map(({ src, alt }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              loading="lazy"
              className="h-106 w-52 shrink-0 snap-start rounded-xl border border-border bg-muted object-cover"
            />
          ))}
        </div>
        <div className="mt-8">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
