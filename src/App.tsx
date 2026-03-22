import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/producto/:slug" element={<ProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
