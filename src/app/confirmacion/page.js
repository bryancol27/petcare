"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../confirmation.css";

const defaultBooking = { code:"#PET-2026-8941", pet:"Zeus", provider:"Guaus Guaus", professional:"Dra. María Fernanda", service:"Baño Completo + Corte Higiénico", price:45000, address:"Calle 145 # 50-20, Suba", date:"sábado, 10 de octubre de 2026", time:"10:00 AM", status:"Pendiente de Confirmación por el Prestador" };
const money = (price) => `$${Number(price).toLocaleString("es-CO")} COP`;

function ConfirmationHeader() {
  return <header className="confirmation-header"><Link href="/" className="confirmation-brand"><span><Image src="/assets/dashboard-logo.svg" alt="" width={22} height={22} /></span>PetCare</Link><Link href="/" className="confirmation-back"><span>←</span>Volver a Inicio</Link></header>;
}

export default function ConfirmationPage() {
  const [booking, setBooking] = useState(defaultBooking);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    try { const saved = window.localStorage.getItem("petcare-booking"); if (saved) setBooking({ ...defaultBooking, ...JSON.parse(saved) }); } catch { /* Keep the example reservation when storage is unavailable. */ }
  }, []);
  async function copyCode() {
    try { await navigator.clipboard.writeText(booking.code); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  }
  const rows = [
    ["♧", "Mascota", `${booking.pet} (${booking.pet === "Luna" ? "Felino - Siamés" : "Canino - Mestizo"})`],
    ["♢", "Prestador", `${booking.provider} - ${booking.professional}`],
    ["✣", "Servicio", `${booking.service} (60 min)`],
    ["▦", "Fecha y Hora", `${booking.date} - ${booking.time}`],
    ["✓", "Total acordado", money(booking.price)],
    ["⌖", "Dirección", booking.address],
  ];
  return <div className="confirmation-page"><ConfirmationHeader/><main className="confirmation-main"><div className="confirmation-success"><span>✓</span></div><p className="confirmation-eyebrow">RESERVA ENVIADA</p><h1>¡Tu solicitud de cita ha sido reservada con éxito!</h1><p className="confirmation-lead">Hemos enviado el comprobante a tu correo y notificado a la veterinaria.</p><section className="confirmation-ticket"><div className="ticket-top"><div className="ticket-code"><small>CÓDIGO DE RESERVA</small><span><strong>{booking.code}</strong><button type="button" onClick={copyCode}>{copied ? "Copiado" : "Copiar"}</button></span></div><div className="ticket-status"><small>ESTADO</small><span><i/> {booking.status}</span></div></div><div className="ticket-cutouts"><i/><i/></div><div className="ticket-details">{rows.map(([icon,label,value])=><div className="ticket-row" key={label}><span className="ticket-icon">{icon}</span><span><small>{label}</small><strong>{value}</strong></span></div>)}</div></section><div className="confirmation-actions"><Link className="confirmation-primary" href="/dashboard#citas">▦　Ir a Mis Citas</Link><button className="confirmation-secondary" type="button" onClick={()=>window.print()}>↓　Descargar Comprobante PDF</button></div><p className="confirmation-support">¿Tienes alguna pregunta? <a href="mailto:soporte@petcare.co">Contacta a nuestro equipo de soporte</a></p></main></div>;
}
