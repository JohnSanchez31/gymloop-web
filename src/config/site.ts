import { Dumbbell, Trophy, Play, Ruler, Send, ClipboardList, UserCog, type LucideIcon } from "lucide-react";

type Feature = { title: string; description: string; icon: LucideIcon };

export const siteConfig = {
  name: "GYMPlus",
  hero: {
    eyebrow: "La app de tu gimnasio",
    title: "Entrena con propósito, sube de nivel",
    description:
      "Crea tus rutinas, sigue cada entrenamiento paso a paso y mira tu progreso. GYMPlus conecta a clientes y coaches en una sola app.",
  },
  stores: {
    googlePlay: "https://play.google.com/store/apps/details?id=REEMPLAZAR",
    appStore: "https://apps.apple.com/app/REEMPLAZAR",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com/REEMPLAZAR" },
    { label: "Facebook", href: "https://facebook.com/REEMPLAZAR" },
    { label: "TikTok", href: "https://tiktok.com/@REEMPLAZAR" },
  ],

  clientFeatures: [
    { icon: Dumbbell, title: "Tus splits y entrenamientos", description: "Crea tus propias rutinas dentro de la app o pídele una a tu coach." },
    { icon: Play, title: "Modo entrenamiento", description: "Ejecuta cada sesión paso a paso, con indicaciones personalizadas e imágenes que te ayudan a reconocer cada ejercicio." },
    { icon: Trophy, title: "Logros, niveles y rangos", description: "Cada entrenamiento suma. Desbloquea logros, sube de nivel y alcanza nuevos rangos." },
    { icon: Ruler, title: "Historial de mediciones", description: "Consulta tus mediciones a lo largo del tiempo y ten una referencia clara de tu progreso." },
    { icon: Send, title: "Pide una rutina a tu coach", description: "Envía una solicitud desde la app y recibe una rutina pensada para ti." },
  ] satisfies Feature[],

  coachFeatures: [
    { icon: ClipboardList, title: "Gestiona solicitudes", description: "Recibe y administra las solicitudes de rutinas de tus clientes desde la app." },
    { icon: UserCog, title: "Registra mediciones", description: "Anota altura, peso, pierna, brazo y más. Tus clientes ven su evolución al instante." },
  ] satisfies Feature[],

  // Save the screenshots in the public/screens folder.
  screenshots: [
    { src: "/screens/1.jpg", alt: "Lista de ejercicios" },
    { src: "/screens/3.jpg", alt: "Logros y niveles en GYMPlus" },
    { src: "/screens/2.jpg", alt: "Historial de mediciones en GYMPlus" },
    { src: "/screens/4.jpg", alt: "Modo entrenamiento en GYMPlus" },
    { src: "/screens/5.jpg", alt: "Mide tu propio progreso" },
  ],

} as const;

export type Plan = {
  id: string;
  name: string;
  locations: string;
  users: string;
  featured?: boolean;
  // No `price` = custom pricing.
  price?: { monthlyCRC: number; annualCRC: number; monthlyUSD: number };
};

export const plans: Plan[] = [
  { id: "inicial", name: "Inicial", locations: "1 local", users: "Hasta 100 usuarios", price: { monthlyCRC: 35000, annualCRC: 350000, monthlyUSD: 77 } },
  { id: "basico", name: "Básico", locations: "1 local", users: "Hasta 200 usuarios", price: { monthlyCRC: 50000, annualCRC: 500000, monthlyUSD: 110 } },
  { id: "pro", name: "Pro", locations: "2 locales", users: "Hasta 300 usuarios", price: { monthlyCRC: 65000, annualCRC: 650000, monthlyUSD: 143 } },
  { id: "enterprise", name: "Enterprise", locations: "3 o más locales", users: "Más de 300 usuarios" },
];
