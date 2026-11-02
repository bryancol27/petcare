"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  ["Servicios", "/servicios"],
  ["Cómo funciona", "#como-funciona"],
  ["Para veterinarios", "/provider"],
  ["Nosotros", "#nosotros"],
];

export function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="landing-header">
      <div className="landing-header-inner">
        <a className="landing-brand" href="#inicio" aria-label="PetCare, inicio">
          <span className="landing-brand-mark">
            <Image src="/assets/landing-icon-veterinary.svg" alt="" width={20} height={20} priority />
          </span>
          <span className="landing-brand-name">PetCare</span>
        </a>

        <nav id="landing-mobile-menu" className={`landing-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          {navigation.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="landing-mobile-login" href="/login">Iniciar sesión</a>
          <a className="landing-mobile-signup" href="/register">Crear cuenta</a>
        </nav>

        <div className="landing-header-actions">
          <a className="landing-login-link" href="/login">Iniciar sesión</a>
          <a className="landing-signup-link" href="/register">Crear cuenta</a>
        </div>

        <button
          className="landing-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="landing-mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>
    </header>
  );
}
