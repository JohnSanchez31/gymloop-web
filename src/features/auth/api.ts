import { useMutation } from "@tanstack/react-query";
import { api, setAccessToken } from "@/lib/api-client";
import type { LoginInput } from "./schema";

// Contrato asumido: POST /auth/login -> { access_token }
export const useLogin = () =>
  useMutation({
    mutationFn: (data: LoginInput) => api.post<{ access_token: string }>("/auth/login", data),
    onSuccess: ({ access_token }) => setAccessToken(access_token),
  });
