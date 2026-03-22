import { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState<string | null>(null);

  if (user) {
    return <Navigate to="/perfil" replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signIn(email);
      setNotice(
        supabase
          ? "Revisa tu correo para completar el acceso."
          : "Sesion demo iniciada. Puedes revisar el perfil mock."
      );
    } catch {
      setNotice("No se pudo iniciar sesion. Revisa la configuracion o usa el modo demo.");
    }
  };

  return (
    <section className="section page-shell">
      <div className="container auth-shell">
        <article className="card auth-card">
          <span className="eyebrow">Login</span>
          <h1>Accede a tu cuenta</h1>
          <p>
            Esta implementacion funciona con magic link de Supabase o en modo demo
            local si no hay variables de entorno configuradas.
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              Correo electronico
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="cliente@correo.com"
                required
              />
            </label>
            <button className="button" type="submit">
              Continuar
            </button>
          </form>

          {notice ? <p className="form-feedback">{notice}</p> : null}
        </article>
      </div>
    </section>
  );
}
