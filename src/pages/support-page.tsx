import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";


const EMAIL = "gympluscr@gmail.com";
const PHONE: string = "";
const ADDRESS = "San Isidro de El General, Pérez Zeledón, San José, Costa Rica";

const mail = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

const topics = [
  {
    title: "Reportar un problema",
    description: "La app falla, no carga algo o no se comporta como esperas.",
    subject: "Soporte GYMPlus: problema con la app",
  },
  {
    title: "Enviar comentarios",
    description: "Cuéntanos qué te gusta y qué podemos mejorar.",
    subject: "Comentarios sobre GYMPlus",
  },
  {
    title: "Sugerir una función",
    description: "¿Hay algo que te gustaría poder hacer en la app?",
    subject: "Sugerencia de función para GYMPlus",
  },
];

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "¿Cómo ingreso al gimnasio y activo el modo entrenamiento?",
    a: "Escanea el código QR de tu gimnasio desde la app, o acerca el teléfono a la etiqueta NFC si tu teléfono lo permite. La app te pedirá permiso para usar la cámara, que solo se usa para escanear el código.",
  },
  {
    q: "¿Cómo pido una rutina a mi coach?",
    a: "Desde la app envía una solicitud indicando cuántos días entrenas, cuánto tiempo tienes por día y, si quieres, un comentario para tu coach. También puedes crear tu propia rutina dentro de la app.",
  },
  {
    q: "¿Quién registra mis mediciones?",
    a: "Tu coach registra tus mediciones (por ejemplo altura, peso y medidas del cuerpo). Puedes ver su historial en la app para seguir tu progreso.",
  },
  {
    q: "¿Cómo elimino mi cuenta?",
    a: (
      <>
        Puedes iniciar el proceso desde la configuración de tu cuenta en la app, o desde{" "}
        <Link to="/eliminar-cuenta" className="text-primary underline">
          esta página
        </Link>
        .
      </>
    ),
  },
  {
    q: "¿Cómo se usan mis datos?",
    a: (
      <>
        Puedes leer los detalles en nuestra{" "}
        <Link to="/privacidad" className="text-primary underline">
          política de privacidad
        </Link>
        .
      </>
    ),
  },
  {
    q: "¿Qué datos incluyo al reportar un problema?",
    a: "Ayuda mucho que nos indiques el modelo de tu teléfono, la versión de iOS o Android, la versión de GYMPlus, qué estabas haciendo cuando ocurrió y, si puedes, una captura de pantalla. No incluyas tu contraseña.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Soporte de GYMPlus</h1>
      <p className="mt-2 text-muted-foreground">
        ¿Tienes un problema con la app, un comentario o una idea? Escríbenos y te ayudamos lo antes posible.
      </p>

      <Card className="mt-8">
        <h2 className="text-xl font-semibold">Contacto</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Correo electrónico</dt>
            <dd>
              <a className="text-primary underline" href={mail("Soporte GYMPlus")}>
                {EMAIL}
              </a>
            </dd>
          </div>
          {PHONE && (
            <div>
              <dt className="text-muted-foreground">Teléfono</dt>
              <dd>
                <a className="text-primary underline" href={`tel:${PHONE.replace(/\s/g, "")}`}>
                  {PHONE}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="text-muted-foreground">Dirección</dt>
            <dd>{ADDRESS}</dd>
          </div>
        </dl>
      </Card>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {topics.map((t) => (
          <a key={t.title} href={mail(t.subject)} className="block">
            <Card className="h-full transition-colors hover:border-primary">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
            </Card>
          </a>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="rounded-lg border border-border bg-card p-4">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-3 text-sm text-foreground/90">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
