import { ContactForm } from "@/features/contact/contact-form";

export function ContactSection() {
  return (
    <section id="contacto" className="mx-auto max-w-xl scroll-mt-20 px-4 py-20">
      <h2 className="text-3xl font-bold">Lleva GYMPlus a tu gimnasio</h2>
      <p className="mb-8 mt-2 text-muted-foreground">
        Déjanos tus datos y te enviamos una propuesta para tu equipo.
      </p>
      <ContactForm />
    </section>
  );
}
