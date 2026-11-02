import Image from "next/image";
import Link from "next/link";

const styles = new Proxy({}, {
  get(_target, key) {
    return `auth-${String(key).replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;
  },
});

export function AuthShell({ children }) {
  return (
    <div className={styles.page}>
      <aside className={styles.showcase}>
        <Link className={styles.brand} href="/" aria-label="PetCare, inicio">
          <span className={styles.brandMark}><Image src="/assets/landing-icon-veterinary.svg" alt="" width={20} height={20} /></span>
          <span>PetCare</span>
        </Link>
        <div className={styles.showcaseContent}>
          <span className={styles.trustPill}><span>◇</span> Cuidado que genera confianza</span>
          <h2>El bienestar de tu<br />mascota a un clic de<br />distancia</h2>
          <p>Conecta con profesionales verificados y administra toda su salud desde un mismo lugar.</p>
          <ul className={styles.benefits}>
            <li><span>✓</span>Agenda en tiempo real</li>
            <li><span>✓</span>Ficha técnica y vacunas unificadas</li>
            <li><span>✓</span>Sin esperas por WhatsApp</li>
          </ul>
          <div className={styles.petPreview}>
            <div className={styles.previewTop}><span>Perfil de mascota</span><b>✓ Verificado</b></div>
            <div className={styles.petIdentity}><span className={styles.petAvatar}>🐾</span><span><strong>Bruno</strong><small>Golden Retriever · 4 años</small></span><span className={styles.previewArrow}>→</span></div>
            <div className={styles.previewStats}><span>▣　Próxima cita<strong>12 Mar · 10:30</strong></span><span>✳　Vacunas<strong>Al día</strong></span></div>
            <div className={styles.progressLabel}><span>Perfil completo</span><b>90%</b></div><div className={styles.progress}><i /></div>
          </div>
        </div>
        <p className={styles.privacy}>♧　Tus datos y los de tu mascota siempre protegidos</p>
      </aside>
      <main className={styles.formPane}>
        <Link className={styles.mobileBrand} href="/" aria-label="PetCare, inicio">
          <span className={styles.brandMark}><Image src="/assets/auth-logo.svg" alt="" width={21} height={21} /></span>
          <span>PetCare</span>
        </Link>
        {children}
      </main>
    </div>
  );
}

export function AuthTabs({ active }) {
  return (
    <nav className={styles.tabs} aria-label="Tipo de acceso">
      <Link className={active === "register" ? styles.tabActive : ""} href="/register">Crear Cuenta</Link>
      <Link className={active === "login" ? styles.tabActive : ""} href="/login">Iniciar Sesión</Link>
    </nav>
  );
}

export { styles as authStyles };
