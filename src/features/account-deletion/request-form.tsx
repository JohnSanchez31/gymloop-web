import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/form-field";
import { deletionRequestSchema, type DeletionRequestInput } from "./schema";
import { useRequestDeletion } from "./api";

export function DeletionRequestForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<DeletionRequestInput>({
    resolver: zodResolver(deletionRequestSchema),
  });
  const request = useRequestDeletion();

  if (request.isSuccess) {
    return (
      <p role="status" className="rounded-md border border-border bg-muted p-4">
        {request.data?.message ??
        "Si el correo está registrado, te enviamos un mensaje con el enlace para confirmar la eliminación."}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit((d) => request.mutate(d))} noValidate className="space-y-4">
      <FormField id="email" label="Correo de tu cuenta" error={errors.email?.message}>
        <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
      </FormField>
      {request.isError && <p role="alert" className="text-sm text-destructive">{request.error.message}</p>}
      <Button type="submit" variant="destructive" disabled={request.isPending}>
        {request.isPending ? "Procesando solicitud..." : "Solicitar eliminación"}
      </Button>
    </form>
  );
}
