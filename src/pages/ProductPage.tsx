import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { products } from "../data/mock";
import { buildProductMessage, buildWhatsAppUrl } from "../lib/whatsapp";
import { formatCurrency } from "../lib/utils";

export default function ProductPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="section page-shell">
        <div className="container narrow">
          <h1>Producto no encontrado</h1>
          <Link className="text-link" to="/catalogo">
            Volver al catalogo
          </Link>
        </div>
      </section>
    );
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <section className="section page-shell">
      <div className="container">
        <div className="product-layout">
          <div className="gallery-column">
            <img src={product.gallery[0]} alt={product.name} className="product-main-image" />
            <div className="thumb-row">
              {product.gallery.map((image) => (
                <img key={image} src={image} alt={product.name} className="thumb-image" />
              ))}
            </div>
          </div>

          <div className="product-info">
            <span className="eyebrow">{product.stockLabel}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="price-row price-xl">
              <strong>{formatCurrency(product.price)}</strong>
              {product.oldPrice ? <span>{formatCurrency(product.oldPrice)}</span> : null}
            </div>
            <ul className="check-list">
              {product.specs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <button className="button button-secondary" onClick={() => addToCart(product.id)}>
                Agregar al carrito
              </button>
              <a
                className="button"
                href={buildWhatsAppUrl(buildProductMessage(product))}
                target="_blank"
                rel="noreferrer"
              >
                Comprar por WhatsApp
              </a>
              <Link className="button button-secondary" to="/catalogo">
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="related-block">
            <h2>Tambien te puede interesar</h2>
            <div className="card-grid">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
