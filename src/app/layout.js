import { DM_Sans, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "PetCare — Agenda cuidado para tu mascota",
  description: "Encuentra veterinaria, peluquería, vacunación y guardería para tu mascota en tiempo real.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${jakartaSans.variable} ${manrope.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
