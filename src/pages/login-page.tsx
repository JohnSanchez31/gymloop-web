import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/form-field";
import { loginSchema, type LoginInput } from "@/features/auth/schema";
import { useLogin } from "@/features/auth/api";

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useLogin();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Iniciar sesión</h1>
      <form
        onSubmit={handleSubmit((d) => login.mutate(d, { onSuccess: () => navigate("/") }))}
        noValidate
        className="space-y-4"
      >
        <FormField id="email" label="Correo" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </FormField>
        <FormField id="password" label="Contraseña" error={errors.password?.message}>
          <Input id="password" type="password" autoComplete="current-password" {...register("password")} />
        </FormField>
        {login.isError && <p role="alert" className="text-sm text-destructive">{login.error.message}</p>}
        <Button type="submit" disabled={login.isPending}>Entrar</Button>
      </form>
    </div>
  );
}
