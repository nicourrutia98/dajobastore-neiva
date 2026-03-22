import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import WhatsappFab from "./WhatsappFab";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
