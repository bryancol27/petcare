"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DashboardPage } from "../../page";
import "../../pet-drawer.css";

function DrawerField({ label, required, children, className = "" }) {
  return <label className={`pet-drawer-field ${className}`}><span>{label}{required && <b> *</b>}</span>{children}</label>;
}

function PetDrawer({ onClose }) {
  const [photoName, setPhotoName] = useState("");
  const [status, setStatus] = useState("");

  function handlePhoto(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setStatus("La foto supera el límite de 5 MB.");
      event.target.value = "";
      return;
    }
    setStatus("");
    setPhotoName(file.name);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Datos de la mascota validados correctamente.");
  }

  return (
    <div className="pet-drawer-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="pet-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="pet-drawer-title">
        <header className="pet-drawer-header">
          <p>NUEVO PERFIL</p>
          <h1 id="pet-drawer-title">Registrar Nueva Mascota</h1>
          <span>Completa sus datos básicos para crear su perfil.</span>
          <button type="button" onClick={onClose} aria-label="Cerrar formulario">×</button>
        </header>
        <form className="pet-drawer-form" onSubmit={handleSubmit}>
          <label className="pet-photo-upload">
            <span className="pet-upload-icon"><Image src="/assets/pet-upload.svg" alt="" width={23} height={23} /></span>
            <span className="pet-upload-copy"><strong>{photoName || "Sube una foto de tu mascota"}</strong><small>PNG o JPG · Máximo 5 MB</small></span>
            <span className="pet-upload-button">Seleccionar foto</span>
            <input type="file" accept="image/png,image/jpeg" onChange={handlePhoto} aria-label="Seleccionar foto de la mascota" />
          </label>
          <DrawerField label="Nombre de la mascota" required>
            <input name="name" placeholder="Ej. Max, Luna, Milo..." required />
          </DrawerField>
          <div className="pet-drawer-row">
            <DrawerField label="Especie" required>
              <select name="species" defaultValue="" required><option value="" disabled>Seleccionar</option><option>Perro</option><option>Gato</option><option>Otro</option></select>
            </DrawerField>
            <DrawerField label="Raza" required><input name="breed" placeholder="Ej. Mestizo" required /></DrawerField>
          </div>
          <div className="pet-drawer-row">
            <DrawerField label="Edad" required><input name="age" placeholder="Ej. 3 años" required /></DrawerField>
            <DrawerField label="Peso en kg" className="pet-weight-field"><span className="pet-optional">Opcional</span><input name="weight" type="number" min="0" step="0.1" placeholder="Ej. 14" /></DrawerField>
          </div>
          <DrawerField label="Observaciones de salud y alergias" className="pet-observations">
            <textarea name="observations" placeholder="Cuéntanos si tiene alguna condición, alergia o cuidado especial..." rows={4} />
            <small>Esta información será visible para los profesionales que atiendan a tu mascota.</small>
          </DrawerField>
          {status && <p className="pet-drawer-status" role="status">{status}</p>}
          <footer className="pet-drawer-actions">
            <button className="pet-cancel-button" type="button" onClick={onClose}>Cancelar</button>
            <button className="pet-save-button" type="submit"><Image src="/assets/pet-save-check.svg" alt="" width={17} height={17} />Guardar Mascota</button>
          </footer>
        </form>
      </section>
    </div>
  );
}

export default function RegisterPetPage() {
  const router = useRouter();
  return <><DashboardPage /><PetDrawer onClose={() => router.push("/dashboard")} /></>;
}
