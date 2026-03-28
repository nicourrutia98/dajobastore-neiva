import type { Product } from "../types";

const fallbackNumber = "573208847267";

export const getWhatsappNumber = () =>
  import.meta.env.VITE_WHATSAPP_NUMBER || fallbackNumber;

export const buildWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${getWhatsappNumber()}?text=${encoded}`;
};

export const buildProductMessage = (product: Product) =>
  `Hola, quiero informacion sobre "${product.name}" por ${product.price.toLocaleString("es-CO")} COP.`;

export const buildCartMessage = (products: Product[]) => {
  const lines = products.map(
    (product, index) => `${index + 1}. ${product.name} - ${product.price.toLocaleString("es-CO")} COP`
  );

  return `Hola, quiero comprar estos productos en DajobaStore:\n${lines.join("\n")}`;
};
