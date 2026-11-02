import { Badge } from "./Badge";
import Image from "next/image";

export function PetProfileCard({ name, detail, avatar = "🐶", vaccinated = true }) {
  return (
    <article className="ui-data-card ui-pet-card">
      <div className="ui-pet-avatar" aria-hidden="true">{avatar}</div>
      <div>
        <p className="ui-card-eyebrow">Perfil de mascota</p>
        <h3 className="ui-pet-name">{name}</h3>
        <p className="ui-pet-meta">{detail}</p>
        {vaccinated && <Badge tone="success">✓ Vacunas al día</Badge>}
      </div>
    </article>
  );
}

export function ServiceCard({ provider, service, rating, duration, price, imageSrc = "/assets/petcare-grooming-card.jpeg" }) {
  return (
    <article className="ui-data-card ui-service-card">
      <Image
        className="ui-service-image"
        src={imageSrc}
        alt="Perro durante una visita al salón de peluquería"
        width={145}
        height={218}
        sizes="(max-width: 640px) 90px, 110px"
      />
      <div>
        <p className="ui-service-rating" aria-label={`Calificación ${rating} de 5`}>★ {rating} · Reseñas verificadas</p>
        <h3 className="ui-service-name">{provider}</h3>
        <p className="ui-service-meta">{service}</p>
      </div>
      <div className="ui-service-bottom">
        <span>{duration}</span>
        <span className="ui-service-price">{price}</span>
      </div>
    </article>
  );
}
