import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Feature = { title: string; description: string; icon: LucideIcon };

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  features: readonly Feature[];
  muted?: boolean;
};

export function FeatureSection({ id, eyebrow, title, description, features, muted }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-20", muted && "border-y border-border bg-card")}>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold">{title}</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className={cn(muted && "bg-background")}>
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
