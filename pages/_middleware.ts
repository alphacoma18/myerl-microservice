import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
export default function Middleware(req: NextApiRequest, res: NextApiResponse) {
	try {
		const url = req.url;
		const siteUrl = "(https://myerl.vercel.app)";
		const apiUrl = "(https://myerl.vercel.app/api)";
		const regex = new RegExp(
			`^${siteUrl}|^${siteUrl}/([a-zA-Z0-9]{8})|^${apiUrl}|^${apiUrl}/([a-zA-Z0-9]{8})`
		);
		if (!url) throw "Error: Undefined URL";
		if (!regex.test(url)) throw "Error: Unauthorized Access";
		return NextResponse.next();
	} catch (err: any) {
		res.json({ err: err.message });
	}
}
