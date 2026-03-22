import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { categories, products } from "../data/mock";
import { slugIncludes } from "../lib/utils";

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const activeCategory = searchParams.get("categoria") || "todos";

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatches =
        activeCategory === "todos" || product.category === activeCategory;
      const queryMatches =
        query.length === 0 ||
        slugIncludes(product.name, query) ||
        slugIncludes(product.description, query);

      return categoryMatches && queryMatches;
    });
  }, [activeCategory, query]);

  return (
    <section className="section page-shell">
      <div className="container">
        <SectionTitle
          eyebrow="Catalogo"
          title="Accesorios listos para una vitrina simple y profesional"
          text="Datos mock, filtros basicos y enfoque en conversion por detalle de producto y WhatsApp."
        />

        <div className="toolbar">
          <div className="filter-row">
            <button
              className={activeCategory === "todos" ? "filter active" : "filter"}
              onClick={() => setSearchParams({})}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={activeCategory === category.slug ? "filter active" : "filter"}
                onClick={() => setSearchParams({ categoria: category.slug })}
              >
                {category.name}
              </button>
            ))}
          </div>
          <input
            className="search-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar accesorios"
          />
        </div>

        <div className="card-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
