import { FormEvent, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { contactInfo } from "../data/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";

export default function ContactPage() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      const data = await response.json();
      setMessage(data.message || "Mensaje enviado.");
      event.currentTarget.reset();
    } catch {
      setMessage("No fue posible enviar el mensaje. Intenta por WhatsApp.");
    }
  };

  return (
    <section className="section page-shell">
      <div className="container">
        <SectionTitle
          eyebrow="Contacto"
          title="Canales simples para vender y resolver dudas"
          text="Incluye formulario, datos de atencion, direccion mock y acceso directo a WhatsApp."
        />

        <div className="contact-grid">
          <form className="card form-card" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Mensaje
              <textarea name="message" rows={5} required />
            </label>
            <button className="button" type="submit">
              Enviar mensaje
            </button>
            {message ? <p className="form-feedback">{message}</p> : null}
          </form>

          <div className="contact-stack">
            <article className="card info-card">
              <h3>Informacion de contacto</h3>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
              <p>{contactInfo.hours}</p>
              <p>
                {contactInfo.address}, {contactInfo.city}
              </p>
              <a
                className="button"
                href={buildWhatsAppUrl("Hola, quiero informacion sobre productos y envios.")}
                target="_blank"
                rel="noreferrer"
              >
                Ir a WhatsApp
              </a>
            </article>

            <article className="card info-card">
              <h3>Ubicacion</h3>
              <div className="map-frame">
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  title="Ubicacion DajobaStore"
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
