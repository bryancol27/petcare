"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../booking.css";

const providerData = {
  guaus: { name: "Guaus Guaus", professional: "Dra. María Fernanda", service: "Baño Completo + Corte Higiénico", price: 45000, address: "Calle 145 # 50-20, Suba", location: "Suba La Colina" },
  peluditos: { name: "Peluditos Spa", professional: "Equipo de estética canina", service: "Baño Básico", price: 38000, address: "Carrera 91 # 145-30, Suba", location: "Suba Centro" },
  huellitas: { name: "Huellitas Suba", professional: "Equipo Huellitas", service: "Baño y Corte de Uñas", price: 52000, address: "Calle 139 # 102-15, Suba", location: "Suba Rincón" },
};
const dates = [{ day:"LUN", date:5 },{ day:"MAR", date:6 },{ day:"MIÉ", date:7 },{ day:"JUE", date:8 },{ day:"VIE", date:9 },{ day:"SÁB", date:10 },{ day:"DOM", date:11 }];
const times = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM"];
const money = (price) => `$${Number(price).toLocaleString("es-CO")} COP`;

function BookingHeader() {
  return <header className="booking-header"><Link href="/" className="booking-brand"><span><Image src="/assets/dashboard-logo.svg" alt="" width={22} height={22} /></span>PetCare</Link><div className="booking-safe"><span>♢</span>Reserva segura</div><Link className="booking-close" href="/servicios" aria-label="Cerrar reserva">×</Link></header>;
}

function BookingProgress() {
  return <div className="booking-progress" aria-label="Paso 2 de 3"><div className="booking-progress-step is-done"><b>✓</b><span><small>PASO 1</small>Mascota</span></div><i /><div className="booking-progress-step is-current"><b>2</b><span><small>PASO 2</small>Fecha y Hora</span></div><i /><div className="booking-progress-step"><b>3</b><span><small>PASO 3</small>Confirmación</span></div></div>;
}

function BookingSummary({ details, pet }) {
  return <aside className="booking-summary"><div className="booking-summary-kicker">RESUMEN DE TU RESERVA</div><h1>Todo listo para agendar</h1><p className="booking-summary-lead">Revisa los detalles del servicio antes de continuar.</p><article className="booking-provider-card"><div className="booking-provider-cover"><Image src="/assets/booking-clinic-dog.png" alt="Perro atendido en Guaus Guaus" fill sizes="(max-width: 760px) 70px, 86px" /></div><div><span className="booking-verified">✓ Prestador verificado</span><strong>{details.name}</strong><small>{details.location} · ★ 4.9</small></div></article><section className="booking-summary-box"><div><small>SERVICIO SELECCIONADO</small><strong>{details.service}</strong><span>◷　Duración: 60 min</span></div><div className="booking-summary-price"><small>Precio</small><strong>{money(details.price)}</strong></div><div><small>UBICACIÓN</small><strong>{details.location}</strong><span>{details.address}</span></div></section><div className="booking-tip"><b>i</b><span><strong>Antes de tu cita</strong><small>Traer carné de vacunación si es primera vez.</small></span></div><p className="booking-help">♢ ¿Necesitas ayuda? <a href="mailto:soporte@petcare.co">Contacta a soporte</a></p><span className="booking-summary-pet">Mascota seleccionada: {pet}</span></aside>;
}

export default function BookingPage() {
  const router = useRouter();
  const [providerId, setProviderId] = useState("guaus");
  const [serviceOverride, setServiceOverride] = useState("");
  const [priceOverride, setPriceOverride] = useState(0);
  const [pet, setPet] = useState("Zeus");
  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [monthOffset, setMonthOffset] = useState(0);
  const [error, setError] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("provider");
    if (id && providerData[id]) setProviderId(id);
    const service = params.get("service");
    const price = params.get("price");
    if (service) setServiceOverride(service);
    if (price) setPriceOverride(Number(price));
  }, []);
  const details = { ...providerData[providerId], ...(serviceOverride ? { service: serviceOverride } : {}), ...(priceOverride ? { price: priceOverride } : {}) };
  const date = new Date(2026, 9 + monthOffset, selectedDate);
  const monthName = new Intl.DateTimeFormat("es-CO", { month: "long", year: "numeric" }).format(new Date(2026, 9 + monthOffset, 1));
  const selectedDateText = new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "numeric", month: "long" }).format(date);
  function continueToConfirmation() {
    if (!pet || !selectedDate || !selectedTime) { setError("Selecciona una mascota, fecha y horario para continuar."); return; }
    const booking = { code:"#PET-2026-8941", pet, providerId, provider:details.name, professional:details.professional, service:details.service, price:Number(details.price), address:details.address, location:details.location, date:selectedDateText, time:selectedTime, status:"Pendiente de Confirmación por el Prestador" };
    window.localStorage.setItem("petcare-booking", JSON.stringify(booking));
    router.push("/confirmacion");
  }
  return <div className="booking-page"><BookingHeader/><BookingProgress/><main className="booking-layout"><BookingSummary details={details} pet={pet}/><section className="booking-form" aria-label="Seleccionar fecha y hora"><div className="booking-step-title"><span>1</span><div><h2>Selecciona tu mascota</h2><small>¿Quién recibirá el servicio?</small></div></div><div className="booking-pet-options" role="radiogroup" aria-label="Mascota">{[{name:"Zeus",detail:"Perro · Mestizo · 3 años",icon:"/assets/booking-pet-dog.svg"},{name:"Luna",detail:"Gato · Siamés · 1 año",icon:"/assets/booking-pet-cat.svg"}].map((option)=><button type="button" role="radio" aria-checked={pet===option.name} className={`booking-pet-option ${pet===option.name?"is-selected":""}`} key={option.name} onClick={()=>setPet(option.name)}><span className="booking-pet-emoji"><Image src={option.icon} alt="" width={26} height={26} /></span><span><strong>{option.name}</strong><small>{option.detail}</small></span><i>{pet===option.name?"●":""}</i></button>)}</div>
      <div className="booking-section-divider"/><div className="booking-step-title"><span>2</span><div><h2>Selecciona la fecha</h2><small>Los días disponibles se actualizan en tiempo real.</small></div></div><div className="booking-month"><button type="button" aria-label="Mes anterior" onClick={()=>setMonthOffset((offset)=>offset-1)}>‹</button><strong>{monthName}</strong><button type="button" aria-label="Mes siguiente" onClick={()=>setMonthOffset((offset)=>offset+1)}>›</button></div><div className="booking-dates">{dates.map(({day,date:number})=><button type="button" key={number} className={`booking-date ${selectedDate===number?"is-selected":""} ${[6,8].includes(number)?"is-disabled":""}`} aria-pressed={selectedDate===number} onClick={()=>![6,8].includes(number)&&setSelectedDate(number)}><small>{day}</small><strong>{number}</strong><i>{![6,8].includes(number)&&"•"}</i></button>)}</div><p className="booking-selected-date">▦ <span>Seleccionaste: <strong>{selectedDateText}</strong></span></p>
      <div className="booking-section-divider"/><div className="booking-step-title"><span>3</span><div><h2>Franjas Horarias Disponibles</h2><small>Bloques de 60 minutos para {pet}.</small></div></div><div className="booking-times">{times.map((time)=>{const unavailable=["9:00 AM","12:00 PM"].includes(time);return <button type="button" key={time} disabled={unavailable} aria-pressed={selectedTime===time} className={`booking-time ${unavailable?"is-unavailable":""} ${selectedTime===time?"is-selected":""}`} onClick={()=>{setSelectedTime(time);setError("")}}>{unavailable&&<span>♙</span>}{time}{selectedTime===time&&<b>✓</b>}</button>})}</div><p className="booking-lock-note">♙ <span>Las franjas se bloquean en tiempo real para evitar cruces.</span></p>
      <div className="booking-total"><span>Total a pagar<small>Pago en el establecimiento</small></span><strong>{money(details.price)}</strong></div>{error&&<p className="booking-error" role="alert">{error}</p>}<button type="button" className="booking-continue" onClick={continueToConfirmation}>Continuar a Confirmación <span>→</span></button>
    </section></main></div>;
}
