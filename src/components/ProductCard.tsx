import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { buildProductMessage, buildWhatsAppUrl } from "../lib/whatsapp";
import { formatCurrency } from "../lib/utils";
import type { Product } from "../types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <article className="card product-card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-body">
        <div className="card-topline">
          <span className="pill">{product.category}</span>
          {product.badge ? <span className="pill pill-solid">{product.badge}</span> : null}
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price-row">
          <strong>{formatCurrency(product.price)}</strong>
          {product.oldPrice ? <span>{formatCurrency(product.oldPrice)}</span> : null}
        </div>
        <div className="card-actions">
          <Link className="button button-secondary" to={`/producto/${product.slug}`}>
            Ver detalle
          </Link>
          <button className="button button-secondary" onClick={() => addToCart(product.id)}>
            Agregar
          </button>
          <a
            className="button"
            href={buildWhatsAppUrl(buildProductMessage(product))}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
