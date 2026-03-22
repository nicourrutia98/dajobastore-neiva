import { Link, NavLink } from "react-router-dom";
import { brand } from "../data/site";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { user } = useAuth();
  const { items } = useCart();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand-lockup" aria-label={brand.name}>
          <img src="/logo-mark.svg" alt="" width="42" height="42" />
          <div>
            <strong>{brand.name}</strong>
            <span>{brand.tagline}</span>
          </div>
        </Link>

        <nav className="main-nav">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/catalogo">Catalogo</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <NavLink to="/carrito">Carrito ({items.length})</NavLink>
          <NavLink to={user ? "/perfil" : "/login"}>
            {user ? "Perfil" : "Login"}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
