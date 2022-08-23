import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
export default function Middleware(req: NextApiRequest, res: NextApiResponse) {
	try {
		const url = req.url;
		const siteUrl = "(http://localhost:3000.app)";
		const apiUrl = "(https://localhost:3000/api)";
		const regex = new RegExp(
			`^${siteUrl}|^${siteUrl}/([a-zA-Z0-9]{8})W*$|^${apiUrl}|^${apiUrl}/([a-zA-Z0-9]{8})W*$`
		);
		if (!url) throw "Error: Undefined URL";
		if (!regex.test(url)) throw "Error: Unauthorized Access";
		return NextResponse.next();
	} catch (err: any) {
		res.json({ err: err.message });
	}
}
