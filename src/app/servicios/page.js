"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import "../services.css";

const providers = [
  { id: "guaus", name: "Guaus Guaus", verified: true, role: "Dra. María Fernanda", location: "Suba La Colina", distance: 2.4, service: "Baño Completo + Corte Higiénico", duration: 60, next: "Sábado 10:00 AM", price: 45000, rating: 4.9, reviews: 38, image: "/assets/service-guaus.png", tag: "Más reservado", categories: ["Peluquería canina", "Baño y spa", "Veterinaria"] },
  { id: "peluditos", name: "Peluditos Spa", role: "Cuidado y estética canina", location: "Suba Centro", distance: 2.4, service: "Baño Básico", duration: 45, next: "Hoy 4:30 PM", price: 38000, rating: 4.7, reviews: 24, image: "/assets/service-peluditos.png", categories: ["Peluquería canina", "Baño y spa"] },
  { id: "huellitas", name: "Huellitas Suba", verified: true, role: "Peluquería pet friendly", location: "Suba Rincón", distance: 2.4, service: "Baño y Corte de Uñas", duration: 50, next: "Sábado 11:30 AM", price: 52000, rating: 4.6, reviews: 19, image: "/assets/service-huellitas.png", categories: ["Peluquería canina", "Baño y spa", "Corte de uñas"] },
];

const categories = [["Peluquería canina", 28], ["Veterinaria", 34], ["Baño y spa", 19], ["Corte de uñas", 12]];
const pesos = (amount) => `$${amount.toLocaleString("es-CO")}`;

function ServiceHeader() {
  return <header className="services-header"><div className="services-header-inner">
    <Link href="/" className="services-brand"><span><Image src="/assets/dashboard-logo.svg" alt="" width={22} height={22} /></span>PetCare</Link>
    <nav aria-label="Navegación principal"><Link href="/">Inicio</Link><Link className="services-nav-active" href="/servicios">Explorar Servicios</Link><Link href="/dashboard">Mis Mascotas</Link><Link href="/dashboard#citas">Mis Citas</Link></nav>
    <div className="services-profile"><button type="button" aria-label="Notificaciones">♧</button><span>PA</span><small>Paula Ariza<br />Tutora</small><b>⌄</b></div>
  </div></header>;
}

function ProviderCard({ provider, saved, onToggle }) {
  const query = new URLSearchParams({ provider: provider.id, service: provider.service, price: String(provider.price) });
  return <article className="provider-card">
    <div className="provider-card-photo"><Image src={provider.image} alt={`Mascota atendida por ${provider.name}`} fill sizes="(max-width: 760px) 30vw, 230px" />{provider.tag && <span className="provider-card-tag">{provider.tag}</span>}<button type="button" className={`provider-save ${saved ? "is-saved" : ""}`} onClick={onToggle} aria-label={saved ? "Quitar de favoritos" : "Guardar prestador"}>{saved ? "♥" : "♡"}</button></div>
    <div className="provider-card-details">
      <div className="provider-card-heading"><div><h2>{provider.name} {provider.verified && <span className="verified-badge">✓ Verificado</span>}</h2><p>{provider.role}</p></div><span className="provider-rating">★ {provider.rating} <small>({provider.reviews} reseñas)</small></span></div>
      <p className="provider-location"><span>⌖</span>{provider.location} · A {provider.distance} km</p>
      <div className="provider-service-line"><div><small>SERVICIO</small><strong>{provider.service}</strong></div><span className="provider-duration">◷　Duración: {provider.duration} min</span></div>
      <div className="provider-next"><span className="provider-mini-icon">▦</span><span><small>Próximo turno libre</small><strong><i />{provider.next}</strong></span></div>
    </div>
    <div className="provider-card-price"><small>Precio final</small><strong>{pesos(provider.price)}</strong><span>COP · Sin cargos ocultos</span><Link href={`/reservar?${query.toString()}`}>Ver Horarios y Reservar</Link><small className="safe-note">♧ Reserva segura y confirmación inmediata</small></div>
  </article>;
}

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Peluquería canina");
  const [location, setLocation] = useState("Suba");
  const [ratingOnly, setRatingOnly] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [sort, setSort] = useState("Recomendados");
  const shown = useMemo(() => {
    let items = providers.filter((provider) => `${provider.name} ${provider.service} ${provider.location}`.toLowerCase().includes(search.toLowerCase()) && (category === "" || provider.categories.includes(category)) && (location === "" || provider.location.toLowerCase().includes(location.toLowerCase())) && (!ratingOnly || provider.rating >= 4.5));
    if (sort === "Menor precio") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "Mejor calificación") items = [...items].sort((a, b) => b.rating - a.rating);
    return items;
  }, [search, location, ratingOnly, sort]);
  const toggleFavorite = (id) => setFavorites((saved) => saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id]);
  const clearFilters = () => { setSearch(""); setCategory(""); setLocation(""); setRatingOnly(false); };

  return <div className="services-page"><ServiceHeader />
    <section className="services-search-wrap" aria-label="Buscar y filtrar prestadores">
      <form className="services-search" onSubmit={(event) => event.preventDefault()}><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar veterinaria, peluquería, corte de uñas..." aria-label="Buscar servicio o prestador" /><button type="submit">Buscar</button></form>
      <div className="active-filters"><label>Categoría: <select value={category} onChange={(event) => setCategory(event.target.value)}><option>Peluquería canina</option><option>Veterinaria</option><option>Baño y spa</option><option>Corte de uñas</option><option value="">Todas</option></select></label><label>Zona / Localidad: <select value={location} onChange={(event) => setLocation(event.target.value)}><option>Suba</option><option>Chapinero</option><option>Usaquén</option><option value="">Todas</option></select></label><label className="filter-short">Rango de Precio: <select defaultValue="Hasta $80.000"><option>Hasta $80.000</option><option>Hasta $60.000</option><option>Hasta $120.000</option></select></label><label className="filter-short">Calificación: <select value={ratingOnly ? "4.8+" : "4.5+"} onChange={(event) => setRatingOnly(event.target.value === "4.8+")}><option>4.5+</option><option>4.8+</option></select></label><button className="clear-filters" type="button" onClick={clearFilters}>Limpiar filtros</button></div>
    </section>
    <main className="services-main"><div className="services-crumb"><Link href="/">Inicio</Link><span>›</span><strong>Explorar Servicios</strong></div>
      <aside className="services-filters"><div className="filter-heading"><h2>Filtros</h2><span>4 activos</span></div>
        <section><h3>Categorías <span>⌃</span></h3>{categories.map(([name, count]) => <label className="filter-option" key={name}><input type="checkbox" checked={category === name || (category === "Peluquería canina" && name === "Peluquería canina")} onChange={() => setCategory(category === name ? "" : name)} /><span>{name}</span><small>{count}</small></label>)}</section>
        <section><h3>Zona y distancia <span>⌃</span></h3><label className="filter-option"><input type="radio" checked={location === "Suba"} onChange={() => setLocation("Suba")} /><span>Suba · Hasta 3 km</span></label><label className="filter-option"><input type="radio" checked={location === ""} onChange={() => setLocation("")} /><span>Hasta 5 km</span></label><label className="filter-option"><input type="radio" checked={location === "Usaquén"} onChange={() => setLocation("Usaquén")} /><span>Hasta 10 km</span></label></section>
        <section><h3>Rango de precio <span>⌃</span></h3><div className="price-range"><span>$20.000</span><span>$120.000 COP</span></div><input type="range" min="20000" max="120000" defaultValue="80000" /><small>Precios por servicio</small></section>
        <section><h3>Comodidades <span>⌃</span></h3>{["Atención de urgencias", "Parqueadero", "Servicio a domicilio"].map((name) => <label className="filter-option" key={name}><input type="checkbox" /><span>{name}</span></label>)}</section>
      </aside>
      <section className="services-results"><div className="results-heading"><h1>{shown.length} resultados encontrados en <span>{location || "Bogotá"}</span></h1><label>Ordenar por: <select value={sort} onChange={(event) => setSort(event.target.value)}><option>Recomendados</option><option>Menor precio</option><option>Mejor calificación</option></select></label></div>
        {shown.length ? shown.map((provider) => <ProviderCard key={provider.id} provider={provider} saved={favorites.includes(provider.id)} onToggle={() => toggleFavorite(provider.id)} />) : <div className="empty-services"><span>⌕</span><h2>No encontramos servicios con esos filtros</h2><p>Prueba otra zona o limpia los filtros para ver todas las opciones.</p><button type="button" onClick={clearFilters}>Limpiar filtros</button></div>}
      </section>
    </main>
  </div>;
}
