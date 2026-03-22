type VercelRequest = {
  method?: string;
  body?: {
    name?: string;
    email?: string;
    message?: string;
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

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Faltan campos obligatorios." });
  }

  return res.status(200).json({
    message: "Mensaje recibido. En una integracion real se guardaria o reenviaria al CRM.",
    receivedAt: new Date().toISOString()
  });
}
