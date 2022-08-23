import ERL from "../../utils/db/index";
import { NextApiRequest, NextApiResponse } from "next";
async function ApiHandler(req: NextApiRequest, res: NextApiResponse) {
	try {
		console.log("Hello World");
		if (req.method === "POST") {
			if (!req.body.url) throw "Error: Invalid URL";
		}
	} catch (err: any) {
		return res.json({ err });
	}
}
export default ApiHandler;
