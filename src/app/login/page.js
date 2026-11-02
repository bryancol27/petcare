"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../auth.css";
import { Button } from "@/components/ui";
import { AuthShell, AuthTabs, authStyles as styles } from "@/components/auth/AuthShell";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <AuthShell>
      <section className={`${styles.authContent} ${styles.loginContent}`}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>PETCARE PARA TODOS</p>
          <h1 className={styles.title}>Qué bueno verte de nuevo</h1>
          <p className={styles.subtitle}>Ingresa tus datos para continuar a tu cuenta.</p>
        </header>
        <AuthTabs active="login" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span className={styles.label}>Correo electrónico</span>
            <span className={styles.inputWrap}>
              <Image className={styles.inputIcon} src="/assets/auth-email.svg" alt="" width={18} height={18} />
              <input className={styles.input} type="email" name="email" placeholder="correo@ejemplo.com" autoComplete="email" required />
            </span>
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Contraseña</span>
            <span className={styles.inputWrap}>
              <Image className={styles.inputIcon} src="/assets/auth-password.svg" alt="" width={18} height={18} />
              <input className={styles.input} type={showPassword ? "text" : "password"} name="password" placeholder="Mínimo 8 caracteres" autoComplete="current-password" minLength={8} required />
              <button className={styles.passwordToggle} type="button" aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} onClick={() => setShowPassword((visible) => !visible)}>
                <Image src="/assets/auth-eye.svg" alt="" width={19} height={19} />
              </button>
            </span>
          </label>
          <Button className={styles.submit} type="submit">Iniciar Sesión <span aria-hidden="true">→</span></Button>
        </form>
        <p className={styles.switchText}>¿Aún no tienes cuenta? <a href="/register">Crea una cuenta</a></p>
      </section>
    </AuthShell>
  );
}
