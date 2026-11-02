"use client";

import { useState } from "react";
import { Chip } from "./Chip";

const categories = ["Peluquería", "Veterinaria", "Guardería", "Paseo"];

export function ChipGroup() {
  const [selected, setSelected] = useState("Veterinaria");

  return (
    <div className="ui-chip-row" role="group" aria-label="Filtrar por categoría">
      {categories.map((category) => (
        <Chip
          key={category}
          active={selected === category}
          onClick={() => setSelected(category)}
        >
          {category}
        </Chip>
      ))}
    </div>
  );
}
