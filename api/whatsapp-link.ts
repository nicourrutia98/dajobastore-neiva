type VercelRequest = {
  method?: string;
  body?: {
    message?: string;
    phone?: string;
  };
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (payload: unknown) => void;
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo no permitido." });
  }

  const phone = req.body?.phone || "573237119144";
  const message = encodeURIComponent(req.body?.message || "Hola, quiero comprar en DajobaStore.");

  return res.status(200).json({
    url: `https://wa.me/${phone}?text=${message}`
  });
}
