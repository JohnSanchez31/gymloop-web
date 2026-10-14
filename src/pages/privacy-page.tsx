import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const UPDATED = "12 de octubre de 2026";
const EMAIL = "gympluscr@gmail.com";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10 space-y-3">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

const P = ({ children }: { children: ReactNode }) => <p className="text-foreground/90">{children}</p>;
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc space-y-1 pl-6 text-foreground/90">{children}</ul>
);

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 leading-relaxed">
      <h1 className="text-3xl font-bold">Política de privacidad de GYMPlus</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última actualización: {UPDATED}</p>

      <Section title="1. Quién es el responsable">
        <P>
          El responsable del tratamiento de tus datos personales es John Sánchez, persona física, con
          domicilio en San José, Costa Rica (en adelante, "GYMPlus",
          "nosotros"). Puedes escribirnos a{" "}
          <a className="text-primary underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </P>
        <P>
          Esta política se aplica a la aplicación móvil GYMPlus y a este sitio web, y se rige por la Ley N.° 8968,
          Protección de la Persona frente al Tratamiento de sus Datos Personales, y su Reglamento.
        </P>
      </Section>

      <Section title="2. Qué datos recopilamos">
        <UL>
          <li>
            <strong>Cuenta:</strong> nombre, apellidos, correo electrónico y contraseña. Opcionalmente, una foto de
            perfil.
          </li>
          <li>
            <strong>Pertenencia:</strong> el gimnasio al que perteneces.
          </li>
          <li>
            <strong>Mediciones corporales:</strong> altura, peso, medidas de pierna, brazo, pecho y cintura, y su
            historial. Las registra tu coach, según la función de la app.
          </li>
          <li>
            <strong>Entrenamiento:</strong> splits, rutinas, ejercicios, series, repeticiones y pesos que creas o
            registras.
          </li>
          <li>
            <strong>Solicitudes de rutina:</strong> cantidad de días, tiempo por día y el comentario opcional que
            escribas para tu coach.
          </li>
          <li>
            <strong>Gamificación:</strong> tu nivel, rango y logros dentro de la app.
          </li>
          <li>
            <strong>Datos técnicos:</strong> nuestros proveedores de infraestructura pueden registrar datos de conexión,
            como la dirección IP, con fines de seguridad y funcionamiento.
          </li>
          <li>
            <strong>Sitio web:</strong> si usas el formulario de contacto, tu nombre, correo, nombre del gimnasio y
            mensaje; si solicitas eliminar tu cuenta, tu correo electrónico.
          </li>
        </UL>
        <P>
          No recopilamos tu ubicación, contactos, datos de pago ni datos de salud de otras aplicaciones. Los pagos a
          tu gimnasio se gestionan directamente con él, fuera de la app.
        </P>
      </Section>

      <Section title="3. Datos sensibles y consentimiento">
        <P>
          Tus mediciones corporales (como el peso) pueden considerarse datos sensibles relacionados con la salud. Los
          tratamos solo con tu consentimiento expreso, que otorgas al aceptar esta política y al permitir que se
          registren. Puedes retirar tu consentimiento en cualquier momento escribiéndonos o eliminando tu cuenta.
        </P>
      </Section>

      <Section title="4. Para qué usamos tus datos">
        <UL>
          <li>Crear y administrar tu cuenta y permitirte iniciar sesión.</li>
          <li>Permitir que crees entrenamientos, uses el modo entrenamiento y veas tu progreso.</li>
          <li>Gestionar tus solicitudes de rutina a tu coach y el registro de tus mediciones.</li>
          <li>Mostrar tu nivel, rango y logros.</li>
          <li>Enviarte correos del sistema, como la confirmación para eliminar tu cuenta.</li>
          <li>Responder consultas y propuestas enviadas por el formulario de contacto.</li>
          <li>Mantener la seguridad del servicio y cumplir obligaciones legales.</li>
        </UL>
        <P>
          No vendemos tus datos, no los usamos para publicidad y no enviamos correos de marketing.
        </P>
      </Section>

      <Section title="5. Quién puede ver tus datos">
        <UL>
          <li>
            <strong>Tu gimnasio:</strong> el gimnasio aliado al que perteneces puede ver los datos de sus coaches y
            usuarios, para gestionar tu entrenamiento.
          </li>
          <li>
            <strong>Tu coach:</strong> puede ver los datos de los usuarios que tiene asignados dentro del mismo
            gimnasio.
          </li>
          <li>
            <strong>Otros usuarios:</strong> actualmente no pueden ver tu información. Si en el futuro agregamos
            perfiles o rankings compartidos, te lo informaremos y te daremos la opción de decidir.
          </li>
          <li>
            <strong>Proveedores de servicios</strong> que procesan datos por nuestra cuenta (sección 6).
          </li>
          <li>
            <strong>Autoridades</strong>, cuando una ley o una orden válida lo exija.
          </li>
        </UL>
        <P>
          El gimnasio es responsable del uso que haga de la información a la que accede dentro de su relación contigo.
        </P>
      </Section>

      <Section title="6. Proveedores y transferencia internacional">
        <P>Usamos los siguientes servicios, cuyos servidores están fuera de Costa Rica, principalmente en Estados Unidos:</P>
        <UL>
          <li>Supabase: base de datos (Oregón, Estados Unidos).</li>
          <li>Railway: alojamiento del servidor de la aplicación.</li>
          <li>Cloudflare: publicación de este sitio web.</li>
          <li>Resend: envío de correos del sistema y de contacto.</li>
        </UL>
        <P>
          Al usar GYMPlus aceptas que tus datos se transfieran y almacenen en estos países. Exigimos a estos
          proveedores que traten los datos únicamente para prestarnos el servicio.
        </P>
      </Section>

      <Section title="7. Permisos del dispositivo">
        <P>
          La app solicita acceso a la <strong>cámara</strong> (y, si tu teléfono lo permite, al <strong>NFC</strong>)
          únicamente para escanear el código QR o la etiqueta que te permite ingresar al gimnasio y activar el modo
          entrenamiento. No guardamos fotos ni videos tomados con la cámara. La app no usa notificaciones, ubicación ni
          otros permisos sensibles.
        </P>
      </Section>

      <Section title="8. Menores de edad">
        <P>
          GYMPlus está dirigida a personas de 13 años o más. Las personas menores de 18 años solo deben usar la app con
          la autorización de su madre, padre o tutor, quien declara haber leído y aceptado esta política. Si
          detectamos una cuenta de una persona menor de 13 años, la eliminaremos. Si eres madre, padre o tutor y deseas
          ejercer derechos sobre los datos de un menor, escríbenos a {EMAIL}.
        </P>
      </Section>

      <Section title="9. Cuánto tiempo conservamos los datos">
        <P>
          Conservamos tus datos mientras tu cuenta esté activa. Cuando eliminas tu cuenta aplica el proceso de la
          sección 10. Mantenemos copias de seguridad propias por un periodo limitado; 
          los datos eliminados o anonimizados pueden permanecer en ellas hasta que se renueven.
        </P>
      </Section>

      <Section title="10. Eliminación de tu cuenta">
        <P>Puedes solicitar la eliminación de tu cuenta de dos formas:</P>
        <UL>
          <li>Dentro de la app, desde la configuración de tu cuenta.</li>
          <li>
            En este sitio web, en{" "}
            <Link to="/eliminar-cuenta" className="text-primary underline">
              Eliminar cuenta
            </Link>
            , ingresando tu correo.
          </li>
        </UL>
        <P>
          Te enviaremos un correo con un enlace de confirmación válido por 15 minutos. Tras confirmar, tu cuenta
          entra en un periodo de procesamiento de 30 días. Al terminar, tus datos que permiten identificarte (nombre,
          apellidos, correo, contraseña, foto de perfil y los detalles de tus solicitudes de rutina) se eliminan o se anonimizan de forma irreversible.
        </P>
        <P>
          <strong>Qué se conserva:</strong> tus datos de entrenamiento y mediciones se mantienen sin ningún dato que
          te identifique, de modo que ya no pueden vincularse contigo.
        </P>
      </Section>

      <Section title="11. Tus derechos">
        <P>
          Tienes derecho a acceder a tus datos, rectificarlos, solicitar su supresión, retirar tu consentimiento y
          conocer cómo se tratan. Para ejercerlos escribe a {EMAIL} desde el correo de tu cuenta. Respondemos en un
          máximo de 5 días hábiles.
        </P>
        <P>
          Si consideras que tus derechos no fueron atendidos, puedes presentar una denuncia ante la Agencia de
          Protección de Datos de los Habitantes (PRODHAB) de Costa Rica.
        </P>
      </Section>

      <Section title="12. Seguridad">
        <P>
          Aplicamos medidas razonables para proteger tus datos: conexiones cifradas (HTTPS), contraseñas almacenadas
          de forma protegida y nunca en texto legible, y acceso a los datos limitado por rol (gimnasio, coach y
          usuario). Ningún sistema es completamente seguro. Si ocurre un incidente que afecte tus datos, te
          lo informaremos por correo electrónico y a las autoridades cuando corresponda.
        </P>
      </Section>

      <Section title="13. Cookies y analítica">
        <P>
          Este sitio y la app no usan cookies de seguimiento, publicidad ni herramientas de analítica de terceros.
        </P>
      </Section>

      <Section title="14. Cambios a esta política">
        <P>
          Podemos actualizar esta política. Publicaremos la nueva versión aquí con su fecha y, si el cambio es
          importante, te avisaremos por la app o por correo.
        </P>
      </Section>

      <Section title="15. Contacto">
        <P>
          Para cualquier consulta sobre privacidad: {EMAIL}. San José, Costa Rica.
        </P>
      </Section>
    </article>
  );
}
