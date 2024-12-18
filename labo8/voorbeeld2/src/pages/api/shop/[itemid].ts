import type { NextApiRequest, NextApiResponse } from "next";
interface Data {
    name: string;
};

function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    let item = String(req.query.itemid ?? "-1");
    res.status(200).json({ name: item });
}

export default handler;