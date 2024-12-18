// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  error?: string;
};

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    res.status(200).json({ name: "John Doe" });
  }
  else { 
    res.status(405).json({ error: "method not allowed" });
  }
}

export default handler;