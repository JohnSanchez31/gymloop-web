import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Correo inválido"),
  gymName: z.string().optional(),
  message: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});
export type ContactInput = z.infer<typeof contactSchema>;
