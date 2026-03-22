import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { blogPosts, categories, products } from "../data/mock";
import { blogHighlights, brand, metrics, storeGallery, testimonials } from "../data/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Accesorios y servicio tecnico</span>
            <h1>{brand.heroTitle}</h1>
            <p>{brand.heroText}</p>
            <div className="hero-actions">
              <Link className="button" to="/catalogo">
                Explorar catalogo
              </Link>
              <a
                className="button button-secondary"
                href={buildWhatsAppUrl("Hola, quiero asesoria para accesorios o reparacion de mi celular.")}
                target="_blank"
                rel="noreferrer"
              >
                Hablar por WhatsApp
              </a>
            </div>
            <div className="metric-row">
              {metrics.map((item) => (
                <div key={item.label} className="metric-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/img/IMG_2339.jpg"
              alt="Vista del local DajobaStore"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container promo-banner">
          <div>
            <span className="eyebrow">Mantenimiento y reparacion</span>
            <h2>Tambien atendemos fallas, mantenimiento y servicio tecnico de celulares</h2>
            <p>
              Si tu equipo presenta danos de carga, bateria, pantalla, audio o
              rendimiento, puedes escribirnos para revision y diagnostico.
            </p>
          </div>
          <a
            className="button"
            href={buildWhatsAppUrl("Hola, necesito mantenimiento o reparacion para mi celular.")}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar revision
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Categorias"
            title="Una tienda simple para encontrar lo que si necesitas"
            text="Estructura clara, fotos reales de referencia y acceso rapido a compra asistida."
          />
          <div className="category-grid">
            {categories.map((category) => (
              <Link
                className="category-card"
                to={`/catalogo?categoria=${category.slug}`}
                key={category.id}
              >
                <img src={category.image} alt={category.name} />
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Destacados"
            title="Productos listos para empujar conversion"
            text="La seleccion mezcla proteccion, energia y audio para un catalogo inicial creible."
          />
          <div className="card-grid">
            {products.filter((product) => product.featured).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Publicidad y tienda"
            title="Imagenes de marca separadas del catalogo"
            text="Las fotos con fachada, flyer, mural o piezas comerciales se usan como soporte visual y no como producto."
          />
          <div className="gallery-grid">
            {storeGallery.map((item) => (
              <article key={item.src} className="gallery-card">
                <img src={item.src} alt={item.alt} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container promo-banner">
          <div>
            <span className="eyebrow">Venta asistida</span>
            <h2>Convierte visitas en conversaciones utiles</h2>
            <p>
              El foco de esta v1 es reducir friccion: el usuario navega, compara,
              consulta reparaciones y finaliza su interes por WhatsApp con mensaje prellenado.
            </p>
          </div>
          <a
            className="button"
            href={buildWhatsAppUrl("Hola, quiero una recomendacion para comprar accesorios o revisar mi celular.")}
            target="_blank"
            rel="noreferrer"
          >
            Iniciar conversacion
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionTitle
              eyebrow="Contenido"
              title="Blog comercial y educativo"
              text="Sirve para SEO, confianza y tambien como base de contenido reutilizable en Gamma."
            />
            <ul className="check-list">
              {blogHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="text-link" to="/blog">
              Ver todos los articulos
            </Link>
          </div>
          <div className="card-grid compact-grid">
            {blogPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Confianza"
            title="Lo que espera una tienda profesional"
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p>"{testimonial.text}"</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
