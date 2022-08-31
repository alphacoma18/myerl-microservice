import bcrypt from "bcrypt";
import ERL from "../../utils/db/index";
import { encrypt } from "../../utils/cryptr";
import NewDate from "../../utils/date";
import { NextApiRequest, NextApiResponse } from "next";

interface IData {
	urlInput: string;
	password: string;
}
async function generateERL(urlInput: string, password?: string) {
	const encrypted_url = encrypt(urlInput);
	const generated_url = encrypted_url.slice(0, 8);
	if (password) {
		const hashedPass = await bcrypt.hash(password, 10);
		await ERL.create({
			encrypted_url,
			generated_url,
			password: hashedPass,
			post_date: NewDate(),
		});
	} else {
		await ERL.create({
			encrypted_url,
			generated_url,
			post_date: NewDate(),
		});
	}
	return `https://myerl.vercel.app/api/${generated_url}`;
}
export default async function ApiHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method !== "POST") throw "Error: Method Unauthorized";
		const { urlInput, password }: IData = req.body;
		if (!urlInput) throw "Error: Undefined URL";
		const regex =
			/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
		if (!regex.test(urlInput)) throw "Error: Invalid URL";
		if (!password) {
			const erl = await generateERL(urlInput);
			return res.json({ erl });
		}
		const passLen = password.length;
		if (passLen >= 10 && passLen <= 50) {
			const erl = await generateERL(urlInput, password);
			return res.json({ erl });
		}
		throw "Error: Password Invalid";
	} catch (err: any) {
		return res.json({ err });
	}
}
