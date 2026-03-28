import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/mock";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  useEffect(() => {
    const previousTitle = document.title;
    const title = document.querySelector("title");
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content") || "";

    if (!title || !description) {
      return;
    }

    if (post) {
      title.textContent = `${post.title} | DajobaStore`;
      description.setAttribute("content", post.excerpt);
    } else {
      title.textContent = "Articulo no encontrado | DajobaStore";
      description.setAttribute(
        "content",
        "Explora articulos de DajobaStore sobre accesorios, mantenimiento y cuidado para tu celular."
      );
    }

    return () => {
      document.title = previousTitle;
      description.setAttribute("content", previousDescription);
    };
  }, [post]);

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
