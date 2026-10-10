import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/form-field";
import { contactSchema, type ContactInput } from "./schema";
import { useSendContact } from "./api";

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });
  const send = useSendContact();

  const onSubmit = (data: ContactInput) => send.mutate(data, { onSuccess: () => reset() });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <FormField id="name" label="Nombre" error={errors.name?.message}>
        <Input id="name" aria-invalid={!!errors.name} {...register("name")} />
      </FormField>
      <FormField id="email" label="Correo" error={errors.email?.message}>
        <Input id="email" type="email" aria-invalid={!!errors.email} {...register("email")} />
      </FormField>
      <FormField id="gymName" label="Nombre del gimnasio (opcional)" error={errors.gymName?.message}>
        <Input id="gymName" {...register("gymName")} />
      </FormField>
      <FormField id="message" label="Mensaje" error={errors.message?.message}>
        <Textarea id="message" aria-invalid={!!errors.message} {...register("message")} />
      </FormField>

      {send.isError && <p role="alert" className="text-sm text-destructive">{send.error.message}</p>}
      {send.isSuccess && <p role="status" className="text-sm text-primary">Mensaje enviado. Te contactaremos pronto.</p>}

      <Button type="submit" disabled={send.isPending}>
        {send.isPending ? "Enviando..." : "Enviar propuesta"}
      </Button>
    </form>
  );
}
