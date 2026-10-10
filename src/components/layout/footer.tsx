import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm md:flex-row md:justify-between">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <nav aria-label="Legal" className="flex flex-wrap gap-6">
          <Link to="/privacidad" className="hover:text-primary">
            Políticas de privacidad
          </Link>
          <Link to="/eliminar-cuenta" className="hover:text-primary">
            Eliminar cuenta
          </Link>
        </nav>
        <ul className="flex gap-4">
          {siteConfig.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-primary">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
