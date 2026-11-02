import { Badge, Button, ChipGroup, PetProfileCard, SelectField, ServiceCard, StatusBadge, TextField } from "@/components/ui";

export const metadata = {
  title: "PetCare · UI Kit",
};

const colors = [
  ["Marca · principal", "#0D9488", "--primary"],
  ["Marca · interacción", "#0F766E", "--primary-hover"],
  ["Marca · oscuro", "#0F172A", "--primary-dark"],
  ["Marca · suave", "#CCFBF1", "--primary-soft"],
  ["Acento · naranja", "#F97316", "--accent-orange"],
  ["Acento · esmeralda", "#10B981", "--accent-emerald"],
  ["Estado · éxito", "#16A34A", "--success"],
  ["Estado · atención", "#EAB308", "--warning"],
  ["Estado · error", "#DC2626", "--error"],
  ["Estado · información", "#0284C7", "--info"],
  ["Fondo · canvas", "#F8FAFC", "--background"],
  ["Superficie · tarjeta", "#FFFFFF", "--surface"],
  ["Borde · divisor", "#E2E8F0", "--border"],
  ["Texto · principal", "#0F172A", "--foreground"],
  ["Texto · secundario", "#475569", "--text-secondary"],
  ["Texto · deshabilitado", "#94A3B8", "--text-disabled"],
];

const typeStyles = [
  ["Display / H1", "36 / 44 · 700", "El mejor cuidado", "display"],
  ["Heading / H2", "28 / 36 · 600", "Mis mascotas", "h2"],
  ["Heading / H3", "20 / 28 · 500", "Próxima cita", "h3"],
  ["Body large", "16 / 24 · 400", "Contenido principal y acciones", "body-lg"],
  ["Body small", "14 / 20 · 400", "Detalles secundarios y tablas", "body-sm"],
  ["Caption", "12 / 16 · 500", "Etiquetas y microcopy", "caption"],
];

function Section({ number, title, description, className = "", children }) {
  return (
    <section className={`ui-section ${className}`.trim()} aria-labelledby={`section-${number}`}>
      <div className="ui-section-heading">
        <span className="ui-section-number" aria-hidden="true">{number}</span>
        <div>
          <h2 id={`section-${number}`}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function UIKitPage() {
  return (
    <div className="ui-page">
      <header className="ui-header">
        <div className="ui-header-inner">
          <a className="ui-brand" href="#inicio" aria-label="PetCare UI Kit, inicio">
            <span className="ui-brand-mark" aria-hidden="true">✦</span>
            <span>
              <span className="ui-brand-kicker">PETCARE</span>
              <span className="ui-brand-title">Visual Design System</span>
            </span>
          </a>
          <p className="ui-header-description">Fundamentos, componentes y patrones para el cuidado de mascotas</p>
          <div className="ui-header-meta">
            <Badge tone="success">WCAG 2.1 AA</Badge>
            <Badge tone="info">v1.0</Badge>
          </div>
        </div>
      </header>

      <main className="ui-main" id="inicio">
        <div className="ui-intro">
          <div>
            <p className="ui-eyebrow">Sistema de diseño · PetCare</p>
            <h1>Una base consistente para cuidar mejor.</h1>
            <p>Tokens y componentes reutilizables tomados del UI kit de Figma, preparados para las pantallas del producto.</p>
          </div>
          <Badge tone="neutral">Responsive · 320 px en adelante</Badge>
        </div>

        <div className="ui-grid">
          <Section number="01" title="Paleta de color" description="Colores de marca, acento, estados y superficies." className="ui-section--wide">
            <div className="ui-swatches">
              {colors.map(([name, value]) => (
                <div className="ui-swatch" key={name}>
                  <span className="ui-swatch-color" style={{ backgroundColor: value }} aria-hidden="true" />
                  <span>
                    <span className="ui-swatch-name">{name}</span>
                    <span className="ui-swatch-value">{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section number="02" title="Tipografía" description="Plus Jakarta Sans para interfaz y Manrope para títulos." className="ui-section--third">
            <div className="ui-type-list">
              {typeStyles.map(([name, spec, sample, kind]) => (
                <div className="ui-type-row" key={name}>
                  <span className="ui-type-name">{name}</span>
                  <span className="ui-type-spec">{spec}</span>
                  <p className={`ui-type-sample ui-type-sample--${kind}`}>{sample}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section number="03" title="Botones" description="Acciones principales y estados interactivos." className="ui-section--half">
            <div className="ui-stack">
              <div>
                <p className="ui-row-label">Variantes</p>
                <div className="ui-button-row">
                  <Button>Reservar cita</Button>
                  <Button variant="secondary">Ver detalles</Button>
                  <Button variant="ghost">Cancelar</Button>
                  <Button variant="danger">Eliminar</Button>
                </div>
              </div>
              <div>
                <p className="ui-row-label">Tamaños y estado deshabilitado</p>
                <div className="ui-button-row">
                  <Button size="small" variant="secondary">Pequeño</Button>
                  <Button>Predeterminado</Button>
                  <Button size="large">Grande</Button>
                  <Button disabled>Deshabilitado</Button>
                </div>
              </div>
            </div>
          </Section>

          <Section number="04" title="Controles de formulario" description="Campos con foco, ayuda, error y selección." className="ui-section--half">
            <div className="ui-form-grid">
              <TextField label="Nombre completo" placeholder="Escribe tu nombre" required />
              <TextField label="Correo electrónico" type="email" defaultValue="paula@ejemplo.com" hint="Usaremos este correo para confirmar tu cita." />
              <TextField label="Teléfono" type="tel" placeholder="300 000 0000" error="Ingresa un número válido." />
              <SelectField label="Categoría" defaultValue="veterinaria">
                <option value="veterinaria">Veterinaria</option>
                <option value="peluqueria">Peluquería y spa</option>
                <option value="guarderia">Guardería</option>
              </SelectField>
            </div>
          </Section>

          <Section number="05" title="Badges y chips" description="Estados legibles y filtros con selección visible." className="ui-section--half">
            <div className="ui-stack">
              <div>
                <p className="ui-row-label">Estado de reserva</p>
                <div className="ui-badge-row">
                  <StatusBadge status="confirmed" />
                  <StatusBadge status="pending" />
                  <StatusBadge status="cancelled" />
                  <StatusBadge status="blocked" />
                </div>
              </div>
              <div>
                <p className="ui-row-label">Categorías · elige una opción</p>
                <ChipGroup />
              </div>
            </div>
          </Section>

          <Section number="06" title="Tarjetas de datos" description="Información clave visible para tutores y proveedores." className="ui-section--half">
            <div className="ui-card-row">
              <PetProfileCard name="Zeus" detail="Perro · Mestizo · 3 años" />
              <ServiceCard provider="Guaus Guaus" service="Baño completo + corte higiénico" rating="4.9" duration="60 min" price="$45.000 COP" />
            </div>
          </Section>
        </div>
        <p className="ui-footer-note">Los colores y tamaños se mantienen como variables globales para reutilizarse al implementar cada pantalla.</p>
      </main>
    </div>
  );
}
