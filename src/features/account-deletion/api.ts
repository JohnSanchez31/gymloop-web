import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { DeletionRequestInput } from "./schema";

type MessageResponse = { message?: string };

// POST /users/account-deletion/request  { email }
export const useRequestDeletion = () =>
  useMutation({
    mutationFn: (data: DeletionRequestInput) =>
      api.post<MessageResponse>("/users/account-deletion/request", data),
  });

// POST /users/account-deletion/confirm/{token}  (sin body)
export const useConfirmDeletion = () =>
  useMutation({
    mutationFn: (token: string) =>
      api.post<MessageResponse>(`/users/account-deletion/confirm/${encodeURIComponent(token)}`),
  });
