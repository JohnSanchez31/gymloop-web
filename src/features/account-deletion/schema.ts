import { z } from "zod";

export const deletionRequestSchema = z.object({
  email: z.string().email("Correo inválido"),
});
export type DeletionRequestInput = z.infer<typeof deletionRequestSchema>;
