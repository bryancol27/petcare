"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui";
import { AuthShell, AuthTabs, authStyles as styles } from "@/components/auth/AuthShell";
import "../auth.css";

const accountOptions = [
  { id: "tutor", title: "Soy Tutor de Mascota", detail: "Busco agendar y gestionar el cuidado de mis animales", icon: "/assets/register-tutor.svg" },
  { id: "provider", title: "Soy Prestador de Servicios", detail: "Soy veterinario o clínica y quiero gestionar mi agenda", icon: "/assets/register-provider.svg" },
];

function FormField({ label, placeholder, icon, type = "text", name, autoComplete, required = true }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}{required ? " *" : ""}</span>
      <span className={styles.inputWrap}>
        {icon && <Image className={styles.inputIcon} src={icon} alt="" width={18} height={18} />}
        <input className={styles.input} name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} required={required} />
      </span>
    </label>
  );
}

export default function RegisterPage() {
  const [accountType, setAccountType] = useState("tutor");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const strength = [password.length >= 8, /[A-Z]/.test(password), /\d/.test(password), /[^A-Za-z0-9]/.test(password)].filter(Boolean).length;

  function handleSubmit(event) {
    event.preventDefault();
    router.push(accountType === "provider" ? "/provider/dashboard" : "/dashboard");
  }

  return (
    <AuthShell>
      <section className={`${styles.authContent} ${styles.registerContent}`}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>PETCARE PARA TODOS</p>
          <h1 className={styles.title}>Crea tu cuenta</h1>
          <p className={styles.subtitle}>Empieza a cuidar mejor, en menos de dos minutos.</p>
        </header>
        <AuthTabs active="register" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset className={styles.accountTypes}>
            <legend className={styles.label}>¿Cómo usarás PetCare?</legend>
            {accountOptions.map((option) => (
              <label className={`${styles.accountType} ${accountType === option.id ? styles.accountTypeSelected : ""}`} key={option.id}>
                <span className={styles.accountIcon}><Image src={option.icon} alt="" width={28} height={28} /></span>
                <span><b>{option.title}</b><small>{option.detail}</small></span>
                <input type="radio" name="accountType" value={option.id} checked={accountType === option.id} onChange={() => setAccountType(option.id)} />
              </label>
            ))}
          </fieldset>

          <div className={styles.twoColumns}>
            <FormField label="Nombre y Apellidos" placeholder="Escribe tu nombre completo" icon="/assets/register-name.svg" name="name" autoComplete="name" />
            <FormField label="Teléfono" placeholder="+57 300 000 0000" icon="/assets/register-phone.svg" type="tel" name="phone" autoComplete="tel" />
          </div>
          <FormField label="Correo electrónico" placeholder="correo@ejemplo.com" icon="/assets/register-email.svg" type="email" name="email" autoComplete="email" />
          <label className={styles.field}>
            <span className={styles.label}>Contraseña *</span>
            <span className={styles.inputWrap}>
              <Image className={styles.inputIcon} src="/assets/register-password.svg" alt="" width={18} height={18} />
              <input className={styles.input} type={showPassword ? "text" : "password"} name="password" placeholder="Mínimo 8 caracteres" autoComplete="new-password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} required />
              <button className={styles.passwordToggle} type="button" aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} onClick={() => setShowPassword((visible) => !visible)}>
                <Image src="/assets/register-eye.svg" alt="" width={19} height={19} />
              </button>
            </span>
          </label>
          <div className={styles.passwordStrength} aria-live="polite">
            <span className={styles.strengthBars}>{[0, 1, 2, 3].map((bar) => <i key={bar} style={bar < strength ? { background: strength < 2 ? "#eab308" : "#10b981" } : undefined} />)}</span>
            <span>{password ? ["Muy débil", "Débil", "Regular", "Buena", "Fuerte"][strength] : "Usa 8 caracteres o más"}</span>
          </div>
          <label className={styles.consent}>
            <input type="checkbox" required />
            <span>Acepto la <a href="#politica">Política de Tratamiento de Datos Personales</a> (Ley 1581 de 2012)</span>
          </label>
          <Button className={styles.submit} type="submit">Registrarme y Continuar <span aria-hidden="true">→</span></Button>
        </form>
        <p className={styles.switchText}>¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a></p>
      </section>
    </AuthShell>
  );
}
