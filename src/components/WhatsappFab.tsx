import { buildWhatsAppUrl } from "../lib/whatsapp";

export default function WhatsappFab() {
  return (
    <a
      className="whatsapp-fab"
      href={buildWhatsAppUrl("Hola, quiero asesoria para comprar accesorios en DajobaStore.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
    >
      WhatsApp
    </a>
  );
}
