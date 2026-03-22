import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section page-shell">
      <div className="container narrow">
        <span className="eyebrow">404</span>
        <h1>Esta pagina no existe</h1>
        <p>La ruta solicitada no esta disponible en esta demo.</p>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
