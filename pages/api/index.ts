import ERL from "../../utils/db/index";
import encrypt from "../../utils/encrypt";
import NewDate from "../../utils/date";
import { NextApiRequest, NextApiResponse } from "next";
async function ApiHandler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { urlInput } = req.body;
		if (!urlInput) throw "Error: Undefined URL";
		// const apiUrl = "(https://myerl.vercel.app/api)";
		const regex =
			/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
		if (!regex.test(urlInput)) throw "Error: Invalid URL";
		if (req.method === "POST") {
			const encrypted_url = encrypt(urlInput);
			const generated_url = encrypted_url.slice(0, 8);
			console.log(encrypted_url);

			await ERL.create({
				encrypted_url,
				generated_url,
				post_date: NewDate(),
			});
			console.log("Hello World");
			console.log(urlInput);
			const erl = `https://myerl.vercel.app/api/${generated_url}`;
			return res.json({ erl });
		}
		throw "Error: Method Unauthorized";
	} catch (err: any) {
		return res.status(401).json({ err });
	}
}
export default ApiHandler;
