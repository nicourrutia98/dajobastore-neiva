import { Link } from "react-router-dom";
import type { BlogPost } from "../types";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <article className="card blog-card">
      <img src={post.image} alt={post.title} className="card-image" />
      <div className="card-body">
        <div className="meta-row">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link className="text-link" to={`/blog/${post.slug}`}>
          Leer articulo
        </Link>
      </div>
    </article>
  );
}
