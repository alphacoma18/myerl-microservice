import ERL from "../../utils/db/index";
import { NextApiRequest, NextApiResponse } from "next";
async function ApiHandler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "POST") {
			const originalURL = req.body.url;
			if (!originalURL) throw "Error: Invalid URL";
		}
	} catch (err: any) {
		return res.json({ err: err.message });
	}
}
export default ApiHandler;
