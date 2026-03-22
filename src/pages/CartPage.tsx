import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { buildCartMessage, buildWhatsAppUrl } from "../lib/whatsapp";
import { formatCurrency } from "../lib/utils";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();
  const [orderMessage, setOrderMessage] = useState<string | null>(null);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items]
  );

  const handleMockOrder = async () => {
    if (items.length === 0) {
      return;
    }

    try {
      const response = await fetch("/api/mock-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({ name: item.name, price: item.price }))
        })
      });
      const data = await response.json();
      setOrderMessage(`Pedido ${data.orderId} generado en modo demo.`);
    } catch {
      setOrderMessage("No fue posible generar el pedido mock.");
    }
  };

  return (
    <section className="section page-shell">
      <div className="container">
        <span className="eyebrow">Carrito</span>
        <h1>Consolida tu compra</h1>
        <p className="lead">
          Esta v1 permite revisar productos, generar un pedido mock y continuar el cierre por WhatsApp.
        </p>

        <div className="profile-grid">
          <article className="card info-card">
            <h3>Productos seleccionados</h3>
            {items.length === 0 ? (
              <p>Tu carrito esta vacio.</p>
            ) : (
              <ul className="order-list">
                {items.map((item, index) => (
                  <li key={`${item.id}-${index}`}>
                    <strong>{item.name}</strong>
                    <span>{formatCurrency(item.price)}</span>
                    <button
                      className="text-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </article>

          <article className="card info-card">
            <h3>Resumen</h3>
            <p>Total estimado: {formatCurrency(total)}</p>
            <div className="cart-actions">
              <a
                className={`button ${items.length === 0 ? "disabled" : ""}`}
                href={items.length ? buildWhatsAppUrl(buildCartMessage(items)) : "#"}
                target="_blank"
                rel="noreferrer"
              >
                Finalizar por WhatsApp
              </a>
              <button className="button button-secondary" onClick={handleMockOrder}>
                Generar pedido mock
              </button>
              <button className="button button-secondary" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
            {orderMessage ? <p className="form-feedback">{orderMessage}</p> : null}
          </article>
        </div>
      </div>
    </section>
  );
}
