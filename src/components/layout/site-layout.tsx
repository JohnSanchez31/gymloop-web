import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/** Hace scroll al ancla (#planes) o arriba al cambiar de ruta. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
