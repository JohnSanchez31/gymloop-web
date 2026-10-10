import { DeletionRequestForm } from "@/features/account-deletion/request-form";

export default function DeleteAccountPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-bold">Eliminación de cuenta y datos personales</h1>
      <p className="mb-8 mt-2 text-muted-foreground">
        Si deseas eliminar tu cuenta de usuario y todos los datos asociados a ella, ingresa la dirección de
        correo electrónico vinculada a tu perfil de Gymplus.
      </p>

      <DeletionRequestForm />

      <p className="mt-8 text-sm text-muted-foreground">
        Al enviar la solicitud, recibirás un mensaje de correo con un enlace de confirmación. Debes 
        hacer clic en dicho enlace dentro de los <b>15 minutos </b>siguientes para validar la petición e 
        iniciar formalmente el proceso. A partir de esa confirmación,
        la cuenta entrará en un periodo de procesamiento de 30 días, tras el cual todos tus datos serán
        eliminados de manera permanente e irreversible de nuestros sistemas.
      </p>
    </div>
  );
}