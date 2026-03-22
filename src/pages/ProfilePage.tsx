import { Link, Navigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useAuth } from "../context/AuthContext";
import { demoOrders, products } from "../data/mock";
import { formatCurrency } from "../lib/utils";

export default function ProfilePage() {
  const { user, signOut, loading } = useAuth();

  if (loading) {
    return (
      <section className="section page-shell">
        <div className="container narrow">
          <p>Cargando perfil...</p>
        </div>
      </section>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="section page-shell">
      <div className="container">
        <div className="profile-header">
          <div>
            <span className="eyebrow">Mi perfil</span>
            <h1>{user.fullName}</h1>
            <p>
              {user.email} · {user.city}
            </p>
          </div>
          <button className="button button-secondary" onClick={() => void signOut()}>
            Cerrar sesion
          </button>
        </div>

        <div className="profile-grid">
          <article className="card info-card">
            <h3>Pedidos mock</h3>
            <ul className="order-list">
              {demoOrders.map((order) => (
                <li key={order.id}>
                  <strong>{order.id}</strong>
                  <span>{order.createdAt}</span>
                  <span>{order.status}</span>
                  <span>{formatCurrency(order.total)}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card info-card">
            <h3>Favoritos sugeridos</h3>
            <p>Como no hay backend persistente completo en esta demo, se muestran destacados relacionados.</p>
            <Link className="text-link" to="/catalogo">
              Ir al catalogo
            </Link>
          </article>
        </div>

        <div className="related-block">
          <h2>Recomendados para ti</h2>
          <div className="card-grid">
            {products.slice(0, 3).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
