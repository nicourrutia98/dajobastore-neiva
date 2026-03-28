import { Link } from "react-router-dom";
import logoImage from "../../1.jpeg";
import { categories } from "../data/mock";
import { brand, contactInfo } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src={logoImage} alt="Logo de DajobaStore" className="footer-logo" />
          <h3>{brand.name}</h3>
          <p>
            {brand.name} vende accesorios y tambien ofrece mantenimiento y
            reparacion de celulares con una experiencia simple y asesorada.
          </p>
        </div>

        <div>
          <h3>Categorias</h3>
          <ul>
            {categories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <Link to={`/catalogo?categoria=${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contacto</h3>
          <ul>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.address}</li>
            <li>{contactInfo.city}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
