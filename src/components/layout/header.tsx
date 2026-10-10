import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import logo from "@/assets/logo.png";

const links = [
  { to: "/#clientes", label: "Clientes" },
  { to: "/#coaches", label: "Coaches" },
  { to: "/#app", label: "La app" },
  { to: "/#planes", label: "Planes" },
  { to: "/#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/">
          <img src={logo} alt="GYMPlus" className="h-8 w-auto" />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" variant="outline">
          <Link to="/login">Iniciar sesión</Link>
        </Button>
      </div>
    </header>
  );
}
