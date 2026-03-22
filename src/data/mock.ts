import type { BlogPost, Category, MockOrder, Product, UserProfile } from "../types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "fundas",
    name: "Fundas",
    description: "Proteccion diaria con opciones delgadas, colores vivos y modelos tipo MagSafe.",
    image: "/img/IMG_2345.PNG"
  },
  {
    id: "cat-2",
    slug: "cargadores",
    name: "Cargadores",
    description: "Carga rapida para casa, oficina y viaje.",
    image: "/img/IMG_2346.PNG"
  },
  {
    id: "cat-3",
    slug: "audifonos",
    name: "Audifonos",
    description: "Desde opciones cableadas hasta modelos extra bass y RGB.",
    image: "/img/IMG_2354.JPG.jpeg"
  },
  {
    id: "cat-4",
    slug: "adaptadores",
    name: "Adaptadores",
    description: "OTG, conectividad y accesorios practicos para ampliar el uso del celular.",
    image: "/img/IMG_2359.jpg"
  },
  {
    id: "cat-5",
    slug: "parlantes",
    name: "Parlantes",
    description: "Audio portatil y parlantes Bluetooth compactos para uso diario.",
    image: "/img/IMG_2348.jpg"
  },
  {
    id: "cat-6",
    slug: "otros-tech",
    name: "Otros tech",
    description: "Complementos de audio y gadgets ligeros del punto de venta.",
    image: "/img/IMG_2353.JPG.jpeg"
  }
];

const articleImage = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const products: Product[] = [
  {
    id: "pro-1",
    slug: "case-iphone-13-pro-max",
    name: "Case para iPhone 13 Pro Max",
    category: "fundas",
    price: 59900,
    oldPrice: 69900,
    image: "/img/IMG_2345.PNG",
    gallery: ["/img/IMG_2345.PNG"],
    rating: 4.8,
    stockLabel: "Disponible hoy",
    description: "Case rigido con look tipo MagSafe para iPhone 13 Pro Max en varios tonos.",
    specs: ["Compatible con iPhone 13 Pro Max", "Acabado mate", "Proteccion de camara"],
    featured: true,
    badge: "Top ventas"
  },
  {
    id: "pro-2",
    slug: "cargador-apple-20w",
    name: "Cargador Apple 20W USB-C",
    category: "cargadores",
    price: 89900,
    image: "/img/IMG_2346.PNG",
    gallery: ["/img/IMG_2346.PNG", "/img/IMG_2350.JPG.jpeg"],
    rating: 4.9,
    stockLabel: "Ultimas unidades",
    description: "Adaptador de 20W ideal para iPhone y equipos con carga rapida USB-C.",
    specs: ["USB-C", "20W", "Formato compacto"],
    featured: true
  },
  {
    id: "pro-3",
    slug: "kit-cargador-cable-apple",
    name: "Kit Cargador + Cable Apple",
    category: "cargadores",
    price: 129900,
    image: "/img/IMG_2350.JPG.jpeg",
    gallery: ["/img/IMG_2350.JPG.jpeg"],
    rating: 4.7,
    stockLabel: "Disponible",
    description: "Combo de cargador y cable USB-C para usuarios que quieren una solucion completa.",
    specs: ["Incluye adaptador", "Incluye cable de carga", "Ideal para iPhone"]
  },
  {
    id: "pro-4",
    slug: "airpods-pro-anc",
    name: "Audifonos Tipo AirPods Pro ANC",
    category: "audifonos",
    price: 99900,
    oldPrice: 119900,
    image: "/img/IMG_2351.JPG.jpeg",
    gallery: ["/img/IMG_2351.JPG.jpeg", "/img/IMG_2352.JPG.jpeg"],
    rating: 4.6,
    stockLabel: "Entrega 24h",
    description: "Audifonos inalambricos con formato compacto y sello visual tipo Pro.",
    specs: ["Estuche de carga", "ANC indicado en caja", "Llamadas y musica"],
    featured: true,
    badge: "Nuevo"
  },
  {
    id: "pro-5",
    slug: "audifonos-bluetooth-wwe",
    name: "Audifonos Bluetooth WWE",
    category: "audifonos",
    price: 79900,
    image: "/img/IMG_2343.jpg",
    gallery: ["/img/IMG_2343.jpg"],
    rating: 4.8,
    stockLabel: "Disponible",
    description: "Audifonos diadema con look tematico y enfoque en uso casual.",
    specs: ["Diadema ajustable", "Audio inalambrico", "Diseño tematico"]
  },
  {
    id: "pro-6",
    slug: "parlante-bluetooth-wireless-speaker",
    name: "Parlante Bluetooth Wireless Speaker 3\"",
    category: "parlantes",
    price: 129900,
    image: "/img/IMG_2348.jpg",
    gallery: ["/img/IMG_2348.jpg"],
    rating: 4.7,
    stockLabel: "Disponible hoy",
    description: "Parlante compacto con luces LED para reuniones, escritorio o uso casual.",
    specs: ["Formato 3 pulgadas", "Luces LED", "Conexion inalambrica"]
  },
  {
    id: "pro-7",
    slug: "headset-universal-ml-217",
    name: "Headset Universal ML-217",
    category: "audifonos",
    price: 24900,
    image: "/img/IMG_2357.jpg",
    gallery: ["/img/IMG_2357.jpg"],
    rating: 4.5,
    stockLabel: "Disponible",
    description: "Audifonos cableados universales para llamadas, estudio y uso diario.",
    specs: ["Conector universal", "Microfono integrado", "Super bass en empaque"]
  },
  {
    id: "pro-8",
    slug: "cargador-rapido-60w-pd",
    name: "Cargador Rapido 60W PD",
    category: "cargadores",
    price: 69900,
    image: "/img/IMG_2358.jpg",
    gallery: ["/img/IMG_2358.jpg"],
    rating: 4.6,
    stockLabel: "Disponible",
    description: "Cargador de alta salida con enfoque en carga rapida y puertos modernos.",
    specs: ["60W", "QC + PD", "USB-C"]
  },
  {
    id: "pro-9",
    slug: "adaptador-otg-usb-v8",
    name: "Adaptador OTG USB V8",
    category: "adaptadores",
    price: 19900,
    image: "/img/IMG_2359.jpg",
    gallery: ["/img/IMG_2359.jpg"],
    rating: 4.4,
    stockLabel: "Disponible",
    description: "Adaptador compacto para conectar memorias y perifericos compatibles.",
    specs: ["USB 2.0", "Formato OTG", "Empaque blister"]
  },
  {
    id: "pro-10",
    slug: "audifonos-rgb-disco-pulse",
    name: "Audifonos RGB Disco Pulse",
    category: "audifonos",
    price: 149900,
    image: "/img/IMG_2354.JPG.jpeg",
    gallery: ["/img/IMG_2354.JPG.jpeg", "/img/IMG_2355.JPG.jpeg"],
    rating: 4.7,
    stockLabel: "Disponible",
    description: "Audifonos inalambricos con copas iluminadas y look llamativo para gaming casual.",
    specs: ["Wireless", "Iluminacion RGB", "Formato diadema"],
    featured: true
  },
  {
    id: "pro-11",
    slug: "audifonos-wireless-extra-bass",
    name: "Audifonos Wireless Extra Bass",
    category: "audifonos",
    price: 94900,
    image: "/img/IMG_2360.jpg",
    gallery: ["/img/IMG_2360.jpg"],
    rating: 4.5,
    stockLabel: "Disponible",
    description: "Modelo plegable con identidad extra bass y varios colores disponibles.",
    specs: ["Wireless", "Diseño plegable", "Extra bass"]
  },
  {
    id: "pro-12",
    slug: "mouse-gamer-bm820",
    name: "Mouse Gamer BM820",
    category: "otros-tech",
    price: 79900,
    image: "/img/IMG_2353.JPG.jpeg",
    gallery: ["/img/IMG_2353.JPG.jpeg"],
    rating: 4.3,
    stockLabel: "Stock limitado",
    description: "Gadget adicional del punto de venta para complementar la seccion de accesorios tech.",
    specs: ["Mouse cableado", "Look gamer", "Uso en escritorio"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "como-elegir-cargador-ideal",
    title: "Como elegir el cargador ideal para tu celular",
    excerpt: "No todos los cargadores entregan la misma seguridad o velocidad. Esta guia resume lo esencial.",
    image: articleImage("photo-1585338107529-13afc5f02586"),
    author: "Equipo DajobaStore",
    date: "15 Mar 2026",
    readTime: "4 min",
    content: [
      "Elegir un cargador va mas alla del conector. Debes revisar potencia, tecnologia de carga y calidad de materiales.",
      "Para la mayoria de usuarios, un cargador entre 20W y 35W cubre carga diaria, buena velocidad y compatibilidad con equipos recientes.",
      "Los modelos GaN ayudan a reducir tamano y calor, algo clave si quieres un cargador para llevar a la oficina o en el bolso.",
      "Si tienes dudas, en DajobaStore te orientamos por WhatsApp segun tu modelo de celular y tus accesorios actuales."
    ]
  },
  {
    id: "blog-2",
    slug: "funda-proteccion-vs-diseno",
    title: "Funda: equilibrio entre proteccion y diseno",
    excerpt: "Una funda no debe hacerte elegir entre seguridad y estilo. Aqui tienes los criterios correctos.",
    image: articleImage("photo-1601593346740-925612772716"),
    author: "Equipo DajobaStore",
    date: "10 Mar 2026",
    readTime: "3 min",
    content: [
      "Las mejores fundas absorben golpes en esquinas y no bloquean botones ni puertos.",
      "Si usas carga inalambrica o accesorios magneticos, conviene buscar compatibilidad MagSafe o sistemas equivalentes.",
      "En colores, los tonos oscuros disimulan desgaste, mientras que los tonos claros resaltan el equipo y el estilo personal."
    ]
  },
  {
    id: "blog-3",
    slug: "cables-que-duran-mas",
    title: "Cables que duran mas: lo que realmente importa",
    excerpt: "El punto debil de muchos cables no esta en el conector, sino en el refuerzo y la flexibilidad.",
    image: articleImage("photo-1615526675051-f6b4dca650cb"),
    author: "Equipo DajobaStore",
    date: "05 Mar 2026",
    readTime: "4 min",
    content: [
      "Un cable bien construido debe tolerar dobleces repetidos sin perder rendimiento.",
      "Los modelos trenzados o con refuerzo en la base del conector suelen durar mas en uso diario.",
      "Tambien importa la potencia soportada. Si tu cargador entrega mas potencia que el cable, perderas velocidad o estabilidad."
    ]
  }
];

export const demoProfile: UserProfile = {
  email: "cliente@demo.com",
  fullName: "Cliente Demo",
  city: "Neiva"
};

export const demoOrders: MockOrder[] = [
  {
    id: "PED-1001",
    createdAt: "18 Mar 2026",
    status: "En proceso",
    total: 159900
  },
  {
    id: "PED-0998",
    createdAt: "06 Mar 2026",
    status: "Entregado",
    total: 214700
  }
];
