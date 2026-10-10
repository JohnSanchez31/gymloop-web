import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <Link to="/" className="mt-4 inline-block text-primary underline">Volver al inicio</Link>
    </div>
  );
}
