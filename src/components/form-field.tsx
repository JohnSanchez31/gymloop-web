import { Label } from "@/components/ui/label";

type Props = { id: string; label: string; error?: string; children: React.ReactNode };

/** Label + control + mensaje de error accesible. Reutilizar en todos los formularios. */
export function FormField({ id, label, error, children }: Props) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
