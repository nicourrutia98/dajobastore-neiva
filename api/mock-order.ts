type VercelRequest = {
  method?: string;
  body?: {
    items?: Array<{ name: string; price: number }>;
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

  const total = (req.body?.items || []).reduce((sum, item) => sum + item.price, 0);

  return res.status(200).json({
    orderId: `PED-${Math.floor(Math.random() * 9000 + 1000)}`,
    total,
    status: "En proceso"
  });
}
