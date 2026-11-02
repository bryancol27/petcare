"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

const fields = [
  { label: "Categoría", icon: "/assets/landing-icon-veterinary.svg", name: "category" },
  { label: "Ubicación / zona", icon: "/assets/landing-icon-location.svg", name: "location" },
];

export function LandingSearch() {
  const router = useRouter();

  function handleSearch(event) {
    event.preventDefault();
    router.push("/servicios");
  }

  return (
    <form className="landing-search" id="buscar" onSubmit={handleSearch}>
      {fields.map(({ label, icon, name }) => (
        <label className="landing-search-field" key={name}>
          <span className="landing-search-icon">
            <Image src={icon} alt="" width={20} height={20} />
          </span>
          <span className="landing-search-copy">
            <span className="landing-search-label">{label}</span>
            <select className="landing-search-value" name={name} defaultValue={name === "category" ? "Veterinaria" : "Chapinero"}>
              {name === "category" ? (
                <>
                  <option>Veterinaria</option>
                  <option>Peluquería y spa</option>
                  <option>Guardería</option>
                  <option>Paseadores</option>
                </>
              ) : (
                <>
                  <option>Chapinero</option>
                  <option>Usaquén</option>
                  <option>Teusaquillo</option>
                  <option>Suba</option>
                </>
              )}
            </select>
          </span>
          <Image className="landing-search-chevron" src="/assets/landing-icon-chevron.svg" alt="" width={18} height={18} />
        </label>
      ))}

      <label className="landing-search-field landing-search-field--date">
        <span className="landing-search-icon">
          <Image src="/assets/landing-icon-calendar.svg" alt="" width={20} height={20} />
        </span>
        <span className="landing-search-copy">
          <span className="landing-search-label">Fecha</span>
          <input className="landing-search-date" name="date" type="date" defaultValue="2026-11-06" />
        </span>
      </label>

      <Button className="landing-search-button" type="submit">
        <Image src="/assets/landing-icon-search.svg" alt="" width={20} height={20} />
        Buscar servicios
      </Button>
    </form>
  );
}
