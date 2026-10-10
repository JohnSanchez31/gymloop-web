import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { plans } from "@/config/site";
import { cn } from "@/lib/utils";

const crc = (n: number) => `₡${n.toLocaleString("en-US")}`;

export function PlansSection() {
  return (
    <section id="planes" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <h2 className="text-3xl font-bold">Planes para gimnasios</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Cada plan da acceso a la app a los coaches y a los clientes de tu gimnasio.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <Card key={p.id} className={cn("flex flex-col", p.featured && "border-primary")}>
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {p.locations} · {p.users}
            </p>

            {p.price ? (
              <div className="mt-4">
                <p className="text-3xl font-bold text-primary">
                  {crc(p.price.monthlyCRC)}
                  <span className="text-sm font-normal text-muted-foreground"> /mes</span>
                </p>
                <p className="text-sm text-muted-foreground">≈ ${p.price.monthlyUSD} USD /mes</p>
                <p className="mt-3 text-sm">
                  Anual: <strong>{crc(p.price.annualCRC)}</strong>
                </p>
              </div>
            ) : (
              <p className="mt-4 text-2xl font-bold text-primary">Precio a medida</p>
            )}

            <div className="mt-auto pt-6">
              <Button asChild variant={p.featured ? "default" : "outline"} className="w-full">
                <Link to="/#contacto">{p.price ? "Solicitar propuesta" : "Solicitar cotización"}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
