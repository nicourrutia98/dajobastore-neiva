import BlogCard from "../components/BlogCard";
import SectionTitle from "../components/SectionTitle";
import { blogPosts } from "../data/mock";

export default function BlogPage() {
  return (
    <section className="section page-shell">
      <div className="container">
        <SectionTitle
          eyebrow="Blog"
          title="Contenido util para vender mejor"
          text="El blog mezcla educacion, confianza y contenido listo para SEO o para reutilizarse en Gamma."
        />
        <div className="card-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
