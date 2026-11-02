"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../dashboard.css";

const pets = [
  { name: "Zeus", companion: "Compañero desde 2021", gender: "♂", species: "Perro", breed: "Mestizo", age: "3 años", weight: "14 kg", photo: "/assets/pet-zeus.png", active: true, reminder: "Esquema de vacunas al día", reminderDetail: "Última actualización: 03 Sep 2024", tone: "health" },
  { name: "Luna", companion: "Compañera desde 2023", gender: "♀", species: "Gato", breed: "Siamés", age: "1 año", weight: "4 kg", photo: "/assets/pet-luna.png", active: false, reminder: "Próxima desparasitación: 15 Nov", reminderDetail: "Te recordaremos 3 días antes", tone: "reminder" },
];

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <Link href="/dashboard" className="dashboard-header-brand" aria-label="PetCare, inicio">
        <span className="dashboard-brand-mark"><Image src="/assets/dashboard-logo.svg" alt="" width={21} height={21} /></span>
        <strong>PetCare</strong>
      </Link>
      <label className="dashboard-search"><span aria-hidden="true">⌕</span><input aria-label="Buscar" placeholder="Buscar servicios, citas o mascotas..." /><kbd>⌘ K</kbd></label>
      <div className="dashboard-header-actions">
        <button className="dashboard-bell" aria-label="Notificaciones"><Image src="/assets/dashboard-bell.svg" alt="" width={21} height={21} /><i>2</i></button>
        <button className="dashboard-user"><span>PA</span><span className="dashboard-user-copy"><strong>Paula Ariza</strong><small>Tutora de mascotas</small></span><span className="dashboard-caret">⌄</span></button>
      </div>
    </header>
  );
}

function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <p className="dashboard-nav-label">GENERAL</p>
      <nav aria-label="Menú de cuenta">
        <Link href="/dashboard"><span>⌂</span>Inicio</Link>
        <Link className="is-active" href="/dashboard"><span>✣</span>Mis Mascotas <b>2</b></Link>
        <Link href="#citas"><span>▦</span>Mis Citas</Link>
        <Link href="#historial"><span>◷</span>Historial Clínico</Link>
      </nav>
      <p className="dashboard-nav-label dashboard-account-label">CUENTA</p>
      <nav aria-label="Cuenta">
        <Link href="#perfil"><span>♙</span>Mi Perfil</Link>
        <Link href="#configuracion"><span>⚙</span>Configuración</Link>
      </nav>
      <div className="dashboard-sidebar-bottom">
        <div className="dashboard-help"><span className="dashboard-help-icon">◇</span><strong>¿Necesitas ayuda?</strong><small>Nuestro equipo está para ayudarte.</small><a href="mailto:soporte@petcare.co">Contactar soporte</a></div>
        <Link className="dashboard-logout" href="/login"><span>⇥</span>Cerrar sesión</Link>
      </div>
    </aside>
  );
}

function PetCard({ pet }) {
  return (
    <article className="pet-card">
      <div className="pet-cover">
        <Image src={pet.photo} alt={`${pet.name}, mascota`} fill sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 34vw" />
        {pet.active && <span className="pet-active"><i />Mascota activa</span>}
        <button className="pet-more" type="button" aria-label={`Más opciones para ${pet.name}`}>•••</button>
      </div>
      <div className="pet-details">
        <div className="pet-name-row"><div><h2>{pet.name}</h2><p>{pet.companion}</p></div><span className={`pet-gender ${pet.gender === "♀" ? "pet-gender--female" : ""}`}>{pet.gender}</span></div>
        <div className="pet-tags"><span>{pet.species}</span><span>{pet.breed}</span><span>{pet.age}</span><span>{pet.weight}</span></div>
        <div className={`pet-reminder pet-reminder--${pet.tone}`}>
          <span className="pet-reminder-icon"><Image src={pet.tone === "health" ? "/assets/dashboard-vaccine.svg" : "/assets/dashboard-calendar.svg"} alt="" width={18} height={18} /></span>
          <span><strong>{pet.reminder}</strong><small>{pet.reminderDetail}</small></span>
        </div>
        <div className="pet-actions">
          <Link href="#historial"><span className="history-mark">⌁</span>Ver Historial y Citas</Link>
          <Link href="#editar"><Image src="/assets/dashboard-edit.svg" alt="" width={17} height={17} />Editar</Link>
        </div>
      </div>
    </article>
  );
}

export function DashboardPage() {
  const [showTip, setShowTip] = useState(true);

  return (
    <div className="dashboard-page">
      <DashboardHeader />
      <DashboardSidebar />
      <main className="dashboard-main">
        <div className="dashboard-breadcrumb"><span>Inicio</span><b>›</b><strong>Mis Mascotas</strong></div>
        <header className="dashboard-title-row">
          <div><h1>Mis Mascotas Registradas</h1><p>Administra su información, citas e historial de salud.</p></div>
          <Link className="dashboard-add-button" href="/dashboard/pets/new"><Image src="/assets/dashboard-add.svg" alt="" width={19} height={19} /><span>Registrar Mascota</span></Link>
        </header>
        <section className="pet-grid" aria-label="Mascotas registradas">
          {pets.map((pet) => <PetCard pet={pet} key={pet.name} />)}
          <Link className="pet-add-card" href="/dashboard/pets/new">
            <span className="pet-add-icon"><Image src="/assets/dashboard-plus.svg" alt="" width={27} height={27} /></span>
            <strong>Agregar nueva mascota</strong>
            <small>Crea su perfil para empezar a gestionar su salud y sus citas.</small>
          </Link>
        </section>
        {showTip && <aside className="dashboard-tip"><span className="dashboard-tip-icon"><Image src="/assets/dashboard-trust.svg" alt="" width={21} height={21} /></span><span><strong>Consejo PetCare</strong><small>Mantén actualizados el peso y las vacunas para recibir recomendaciones personalizadas.</small></span><button type="button" onClick={() => setShowTip(false)}>Entendido</button></aside>}
      </main>
    </div>
  );
}

export default DashboardPage;
