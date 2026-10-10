import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "@/components/layout/site-layout";

// Each page is lazy-loaded. When the admin panel exists, add an /admin group 
// here with its own layout and an auth guard.
export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, lazy: async () => ({ Component: (await import("@/pages/home-page")).default }) },
      { path: "eliminar-cuenta", lazy: async () => ({ Component: (await import("@/pages/delete-account-page")).default }) },
      { path: "eliminar-cuenta/confirmar", lazy: async () => ({ Component: (await import("@/pages/confirm-deletion-page")).default }) },
      { path: "privacidad", lazy: async () => ({ Component: (await import("@/pages/privacy-page")).default }) },
      { path: "login", lazy: async () => ({ Component: (await import("@/pages/login-page")).default }) },
      { path: "*", lazy: async () => ({ Component: (await import("@/pages/not-found-page")).default }) },
    ],
  },
]);
