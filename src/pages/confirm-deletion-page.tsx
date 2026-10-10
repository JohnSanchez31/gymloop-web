import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useConfirmDeletion } from "@/features/account-deletion/api";

export default function ConfirmDeletionPage() {
  const token = useSearchParams()[0].get("token");
  const confirm = useConfirmDeletion();

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-bold">Confirmar eliminación de cuenta</h1>

      {!token && (
        <p role="alert" className="mt-4 text-destructive">
          Token inválido.
        </p>
      )}

      {token && !confirm.isSuccess && (
        <div className="mt-4 space-y-4">
          <p className="text-muted-foreground">
            ¿Estás seguro de que deseas solicitar la eliminación de tu cuenta?
          </p>
          {confirm.isError && (
            <p role="alert" className="text-sm text-destructive">
              {confirm.error instanceof TypeError
                ? "No se pudo conectar con el servidor."
                : confirm.error.message}
            </p>
          )}
          <Button variant="destructive" disabled={confirm.isPending} onClick={() => confirm.mutate(token)}>
            {confirm.isPending ? "Confirmando..." : "Confirmar eliminación"}
          </Button>
        </div>
      )}

      {confirm.isSuccess && (
        <div role="status" className="mt-4 space-y-4">
          <p>{confirm.data?.message ?? "Solicitud de eliminación confirmada."}</p>
          <Button asChild variant="outline">
            <Link to="/">Volver al inicio</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
