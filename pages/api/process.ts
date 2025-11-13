import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Invalid message" });
  }

  const reversed = message.split("").reverse().join("");

  res.status(200).json({
    received: message,
    processed: reversed,
    timestamp: new Date().toISOString(),
  });
}