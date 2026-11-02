"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../../provider.css";

const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];

function ProviderHeader() {
  return (
    <header className="provider-header">
      <Link href="/provider/dashboard" className="provider-brand">
        <span className="provider-brand-mark"><Image src="/assets/provider-logo.svg" alt="" width={21} height={21} /></span>
        <span><small>CLÍNICA</small><strong>Guaus Guaus</strong></span>
      </Link>
      <nav className="provider-nav" aria-label="Menú de prestador">
        <a className="provider-nav-active" href="#agenda"><span>▣</span>Agenda</a>
        <a href="#clientes"><span>♙</span>Clientes</a>
        <a href="#servicios"><span>✣</span>Servicios</a>
        <a href="#reportes"><span>◷</span>Reportes</a>
      </nav>
      <div className="provider-header-right">
        <span className="provider-online"><i />En línea <b>·</b> Recibiendo citas</span>
        <button className="provider-notifications" type="button" aria-label="Notificaciones, 3 nuevas"><Image src="/assets/provider-bell.svg" alt="" width={20} height={20} /><i>3</i></button>
        <button className="provider-avatar" type="button" aria-label="Perfil de Dra. María Fernanda">MF</button>
        <span className="provider-account"><strong>Dra. María Fernanda</strong><small>Administradora</small></span>
        <span className="provider-down">⌄</span>
      </div>
    </header>
  );
}

function TimeLabel({ time, end }) {
  return <div className="provider-time"><strong>{time}</strong><small>{end}</small><i /></div>;
}

function ConfirmedAppointment() {
  return (
    <article className="provider-event provider-event--confirmed">
      <span className="provider-pet-icon provider-pet-icon--rocky"><Image src="/assets/provider-rocky.svg" alt="" width={26} height={26} /></span>
      <div className="provider-event-pet"><small>CONSULTA PROGRAMADA</small><strong>Rocky</strong><span>French Bulldog · Tutor: Andrés Silva</span></div>
      <div className="provider-event-service"><small>SERVICIO</small><strong>Consulta General</strong><span>◷　60 min</span></div>
      <span className="provider-status provider-status--confirmed"><b>✓</b>Confirmada</span>
      <button className="provider-event-more" aria-label="Opciones de la cita de Rocky"><Image src="/assets/provider-more.svg" alt="" width={19} height={19} /></button>
    </article>
  );
}

function BlockedSlot() {
  return (
    <article className="provider-event provider-event--blocked">
      <span className="provider-pet-icon provider-pet-icon--blocked"><Image src="/assets/provider-block.svg" alt="" width={17} height={17} /></span>
      <div className="provider-event-pet"><small>BLOQUEO INTERNO</small><strong>Pausa médica / Esterilización de instrumental</strong></div>
      <a href="#bloqueo">Editar bloqueo</a>
    </article>
  );
}

function PendingAppointment({ status, onStatus }) {
  const confirmed = status === "Confirmada";
  return (
    <article className={`provider-event provider-event--pending ${confirmed ? "provider-event--resolved" : ""}`}>
      <div className="provider-pending-heading">
        <span className="provider-pet-icon provider-pet-icon--zeus"><Image src="/assets/provider-zeus.svg" alt="" width={29} height={29} /></span>
        <div className="provider-event-pet"><small>NUEVA SOLICITUD</small><strong>Zeus</strong><span>Perro mestizo · 3 años · 14 kg</span><span>Tutora: Paula Ariza · Tel: 310 123 4567</span></div>
        <span className={`provider-status ${confirmed ? "provider-status--confirmed" : "provider-status--pending"}`}><Image src="/assets/provider-pending.svg" alt="" width={13} height={13} />{status}</span>
      </div>
      <div className="provider-request-service">
        <span className="provider-service-icon"><Image src="/assets/provider-service.svg" alt="" width={18} height={18} /></span>
        <span><small>SERVICIO SOLICITADO</small><strong>Baño Completo + Corte Higiénico</strong></span>
        <b className="provider-price">$45.000 <small>COP</small></b>
      </div>
      {!confirmed && <div className="provider-pending-actions">
        <button type="button" className="provider-confirm-button" onClick={() => onStatus("Confirmada")}><Image src="/assets/provider-confirm.svg" alt="" width={15} height={15} />Confirmar Cita</button>
        <button type="button" className="provider-reschedule-button" onClick={() => onStatus("Reprogramar")}><Image src="/assets/provider-reschedule.svg" alt="" width={15} height={15} />Reprogramar</button>
        <button type="button" className="provider-reject-button" onClick={() => onStatus("Rechazada")}>× Rechazar</button>
      </div>}
    </article>
  );
}

function OpenSlot({ onCreate }) {
  return (
    <article className="provider-event provider-event--available">
      <span className="provider-pet-icon provider-pet-icon--available">＋</span>
      <div className="provider-event-pet"><strong>Disponible para reservas</strong><span>Esta franja puede ser agendada por tus clientes</span></div>
      <button type="button" onClick={onCreate}>Crear cita manual</button>
    </article>
  );
}

function DailySummary() {
  return (
    <aside className="provider-summary">
      <header><small>RESUMEN DEL DÍA</small><h2>Operación de hoy</h2><span>Actualizado en tiempo real</span></header>
      <div className="provider-metric"><span className="provider-metric-icon provider-metric-icon--mint">▦</span><span><small>CITAS HOY</small><em>+2 vs. sábado anterior</em></span><strong>5</strong></div>
      <div className="provider-metric"><span className="provider-metric-icon provider-metric-icon--amber">◷</span><span><small>PENDIENTES</small><em>Requieren tu atención</em></span><strong>1</strong></div>
      <div className="provider-metric"><span className="provider-metric-icon provider-metric-icon--blue">↻</span><span><small>TASA DE OCUPACIÓN</small><em>7 de 8 horas reservadas</em></span><strong>85%</strong></div>
      <section className="provider-weekly"><header><strong>Ocupación semanal</strong><b>85%</b></header><div className="provider-chart" aria-label="Ocupación semanal"><i style={{height:"48%"}}/><i style={{height:"63%"}}/><i style={{height:"75%"}}/><i style={{height:"55%"}}/><i style={{height:"82%"}}/><i className="provider-chart-active" style={{height:"90%"}}/><i style={{height:"58%"}}/></div><div className="provider-chart-labels"><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span></div></section>
      <div className="provider-alert"><span>♧</span><p><strong>1 solicitud por revisar</strong><small>Confirma pronto para mantener tu tasa de respuesta.</small></p></div>
    </aside>
  );
}

export default function ProviderDashboardPage() {
  const [view, setView] = useState("Día");
  const [appointmentStatus, setAppointmentStatus] = useState("Pendiente por confirmar");
  const [notice, setNotice] = useState("");
  const [dayOffset, setDayOffset] = useState(0);
  const baseDate = new Date(2026, 9, 10 + dayOffset);
  const desktopDate = new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(baseDate);
  const mobileDate = new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "2-digit", month: "short" }).format(baseDate);

  return (
    <div className="provider-page">
      <ProviderHeader />
      <main className="provider-main" id="agenda">
        <div className="provider-breadcrumb"><span>Panel operativo</span><b>›</b><strong>Mi Agenda</strong></div>
        <section className="provider-controls">
          <div className="provider-title"><h1>Agenda de Turnos</h1><p><span className="provider-date-desktop">{desktopDate}</span><span className="provider-date-mobile">{mobileDate}</span></p></div>
          <div className="provider-control-right">
            <div className="provider-view-tabs" role="tablist" aria-label="Vista de agenda">{["Día","Semana","Mes"].map((option)=><button key={option} role="tab" aria-selected={view===option} className={view===option?"is-selected":""} onClick={()=>setView(option)}>{option}</button>)}</div>
            <div className="provider-control-actions"><button type="button" className="provider-configure" onClick={()=>setNotice("Configuración de horarios") }><Image src="/assets/provider-settings.svg" alt="" width={17} height={17} />Configurar Horarios</button><button type="button" className="provider-block-day" onClick={()=>setNotice("Selecciona una franja para bloquear") }><Image src="/assets/provider-lock.svg" alt="" width={16} height={16} />Bloquear Día / Franja</button></div>
          </div>
        </section>
        {notice && <p className="provider-notice" role="status">{notice}<button type="button" onClick={()=>setNotice("")}>×</button></p>}
        <div className="provider-content-grid">
          <section className="provider-schedule" aria-label="Agenda del día">
            <header className="provider-schedule-header"><div><span className="provider-today">HOY</span><strong><span className="provider-date-desktop">Sábado, 10 Oct</span><span className="provider-date-mobile">Sábado, 10 Oct</span></strong><div className="provider-legend"><span><i className="legend-green"/>Confirmada</span><span><i className="legend-amber"/>Pendiente</span><span><i className="legend-gray"/>Disponible</span></div></div><div className="provider-day-nav"><button type="button" onClick={()=>setDayOffset(0)}>Hoy</button><button type="button" aria-label="Día anterior" onClick={()=>setDayOffset((d)=>d-1)}>‹</button><button type="button" aria-label="Día siguiente" onClick={()=>setDayOffset((d)=>d+1)}>›</button></div></header>
            <div className="provider-timeline">
              <div className="provider-slot"><TimeLabel time={timeSlots[0]} end="9:00 AM"/><span className="provider-rail provider-rail--green"/><ConfirmedAppointment /></div>
              <div className="provider-slot"><TimeLabel time={timeSlots[1]} end="10:00 AM"/><span className="provider-rail provider-rail--gray"/><BlockedSlot /></div>
              <div className="provider-slot provider-slot--pending"><TimeLabel time={timeSlots[2]} end="11:00 AM"/><span className="provider-rail provider-rail--amber"/><PendingAppointment status={appointmentStatus} onStatus={setAppointmentStatus} /></div>
              <div className="provider-slot"><TimeLabel time={timeSlots[3]} end="12:00 PM"/><span className="provider-rail provider-rail--empty"/><OpenSlot onCreate={()=>setNotice("Cita manual: completa los datos del cliente para continuar.")} /></div>
            </div>
          </section>
          <DailySummary />
        </div>
      </main>
    </div>
  );
}
