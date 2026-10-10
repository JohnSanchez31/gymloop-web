import { env } from "@/lib/env";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// El token vive en memoria. Cuando exista el panel admin, lo ideal es cookie httpOnly emitida por FastAPI.
let accessToken: string | null = null;
export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

type RequestOptions = Omit<RequestInit, "body"> & { body?: unknown };

async function request<T>(path: string, { body, headers, ...init }: RequestOptions = {}): Promise<T> {
  const res = await fetch(`${env.apiUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const data = res.status === 204 ? null : await res.json().catch(() => null);


  if (res.ok && (data as { success?: unknown } | null)?.success === false) {
    throw new ApiError(res.status, (data as { message?: string }).message ?? "No se pudo completar la solicitud.");
  }

  if (!res.ok) {
    // Tu API responde { message }; FastAPI por defecto responde { detail }. Soportamos ambos.
    const payload = data as { message?: unknown; detail?: unknown } | null;
    const message =
      typeof payload?.message === "string"
        ? payload.message
        : typeof payload?.detail === "string"
          ? payload.detail
          : "No se pudo completar la solicitud.";
    throw new ApiError(res.status, message, payload?.detail);
  }
  return data as T;
}

export const api = {
  get: <T>(path: string, init?: RequestOptions) => request<T>(path, { ...init, method: "GET" }),
  post: <T>(path: string, body?: unknown, init?: RequestOptions) =>
    request<T>(path, { ...init, method: "POST", body }),
  put: <T>(path: string, body?: unknown, init?: RequestOptions) =>
    request<T>(path, { ...init, method: "PUT", body }),
  delete: <T>(path: string, init?: RequestOptions) => request<T>(path, { ...init, method: "DELETE" }),
};
