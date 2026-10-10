import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { ContactInput } from "./schema";

// Contrato asumido: POST /contact -> 202
export const useSendContact = () =>
  useMutation({ mutationFn: (data: ContactInput) => api.post<void>("/contact", data) });
