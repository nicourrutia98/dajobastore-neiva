import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/mock";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="section page-shell">
        <div className="container narrow">
          <h1>Articulo no encontrado</h1>
          <Link className="text-link" to="/blog">
            Volver al blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-shell">
      <div className="container narrow">
        <span className="eyebrow">{post.date}</span>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <img src={post.image} alt={post.title} className="post-hero" />
        <div className="post-body">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
