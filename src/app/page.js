import Image from "next/image";
import Link from "next/link";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingSearch } from "@/components/landing/LandingSearch";

const services = [
  {
    name: "Veterinaria",
    detail: "Consulta y urgencias",
    price: "Desde $35.000",
    icon: "/assets/landing-icon-veterinary.svg",
    tone: "mint",
  },
  {
    name: "Peluquería y Spa",
    detail: "Baño, corte y cuidado",
    price: "Desde $28.000",
    icon: "/assets/landing-icon-grooming.svg",
    tone: "peach",
  },
  {
    name: "Guardería",
    detail: "Cuidado seguro y feliz",
    price: "Desde $40.000",
    icon: "/assets/landing-icon-daycare.svg",
    tone: "blue",
  },
  {
    name: "Paseadores",
    detail: "Paseos cerca de ti",
    price: "Desde $15.000",
    icon: "/assets/landing-icon-walking.svg",
    tone: "green",
  },
];

function ReviewProof() {
  return (
    <div className="landing-review-proof">
      <div className="landing-avatar-stack" aria-hidden="true">
        <Image src="/assets/landing-review-dog.png" alt="" width={34} height={34} />
        <Image src="/assets/landing-review-cat.png" alt="" width={34} height={34} />
        <span>+1k</span>
      </div>
      <span className="landing-review-copy">
        <strong>★ 4.9 de 5</strong>
        <span>Calificación de familias felices</span>
      </span>
    </div>
  );
}

function HeroPhoto() {
  return (
    <div className="landing-hero-visual">
      <div className="landing-hero-orbit" aria-hidden="true" />
      <div className="landing-photo-frame">
        <Image
          className="landing-vet-photo"
          src="/assets/landing-veterinary-consult.png"
          alt="Veterinaria revisando a un perro en consulta"
          width={512}
          height={412}
          sizes="(max-width: 640px) 358px, (max-width: 1100px) 42vw, 466px"
          priority
        />
        <span className="landing-availability">
          <span aria-hidden="true" />
          24 profesionales disponibles
        </span>
      </div>
      <div className="landing-floating-photo" aria-hidden="true">
        <Image src="/assets/landing-vet-availability.png" alt="" width={89} height={89} />
      </div>
      <div className="landing-confirmation-note">
        <span className="landing-confirmation-check" aria-hidden="true">✓</span>
        <span><strong>Confirmación inmediata</strong><small>Citas sin solapamientos en tiempo real</small></span>
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="landing-trust-section" id="nosotros" aria-label="La confianza de las familias PetCare">
      <div className="landing-trust-bar">
        <div className="landing-trust-intro">
          <span className="landing-trust-icon"><Image src="/assets/landing-icon-trust-pet.svg" alt="" width={21} height={21} /></span>
          <span>La tranquilidad de saber que<strong>están en buenas manos.</strong></span>
        </div>
        <div className="landing-trust-item landing-trust-item--number">
          <strong>+1.500</strong><span>Mascotas atendidas</span>
        </div>
        <div className="landing-trust-item">
          <span className="landing-trust-icon"><Image src="/assets/landing-icon-trust-verified.svg" alt="" width={21} height={21} /></span>
          <span><strong>100%</strong><small>Profesionales verificados</small></span>
        </div>
        <div className="landing-trust-item">
          <span className="landing-trust-icon"><Image src="/assets/landing-icon-trust-live.svg" alt="" width={21} height={21} /></span>
          <span><strong>En vivo</strong><small>Agenda 100% sincronizada</small></span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="landing-page" id="inicio">
      <LandingHeader />
      <main>
        <section className="landing-hero" id="como-funciona" aria-labelledby="landing-heading">
          <div className="landing-hero-container">
            <div className="landing-hero-copy">
              <span className="landing-eyebrow"><i aria-hidden="true" />Cuidado confiable, mascotas felices</span>
              <h1 id="landing-heading">
                <span className="landing-heading-desktop">
                  <span>Encuentra y agenda el</span>
                  <span>mejor cuidado para tu</span>
                  <span>mascota <span className="landing-heading-highlight">en tiempo real<span className="landing-heading-underline" aria-hidden="true" /></span></span>
                </span>
                <span className="landing-heading-mobile">
                  <span>Encuentra y agenda</span>
                  <span>el mejor cuidado</span>
                  <span>para tu mascota <span className="landing-heading-highlight">en</span></span>
                  <span className="landing-heading-highlight">tiempo real<span className="landing-heading-underline" aria-hidden="true" /></span>
                </span>
              </h1>
              <p className="landing-description">
                Veterinaria, peluquería, vacunación y guardería sin esperas por chat ni llamadas. Confirmación inmediata.
              </p>
              <ReviewProof />
            </div>
            <HeroPhoto />
            <LandingSearch />
          </div>
        </section>

        <section className="landing-services" id="servicios" aria-labelledby="services-heading">
          <div className="landing-services-heading">
            <div>
              <p className="landing-section-eyebrow">Todo en un solo lugar</p>
              <h2 id="services-heading">¿Qué necesita tu mascota hoy?</h2>
            </div>
            <Link className="landing-all-services" href="#buscar">
              Ver todos los servicios
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="landing-service-grid">
            {services.map((service) => (
              <a className="landing-service-card" href="#buscar" key={service.name}>
                <span className={`landing-service-icon landing-service-icon--${service.tone}`}>
                  <Image src={service.icon} alt="" width={service.name === "Veterinaria" ? 20 : 27} height={service.name === "Veterinaria" ? 20 : 27} />
                </span>
                <span className="landing-service-info">
                  <strong>{service.name}</strong>
                  <small>{service.detail}</small>
                  <span className="landing-service-price">{service.price}</span>
                </span>
                <span className="landing-service-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

        <TrustBar />
      </main>
    </div>
  );
}
