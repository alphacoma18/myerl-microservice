import ERL from "../../utils/db";
import { decrypt } from "../../utils/cryptr";
import { NextApiRequest, NextApiResponse } from "next";
import { IERL } from "../../utils/db";
import bcrypt from "bcrypt";

async function getData(user_eri: string): Promise<IERL | null> {
	return await ERL.findOne({
		generated_url: user_eri,
	});
}
export default async function ErlHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { url } = req;
		if (url?.length !== 13) throw "Error: Invalid ERL";
		const user_eri = url.slice(5, 13);
		if (req.method === "GET") {
			const data = await getData(user_eri);
			if (data === null) throw "Error: ERL Invalid";
			if (data?.password) return res.redirect("https://myerl.vercel.app");
			const original_url = decrypt(data.encrypted_url);
			return res.status(301).redirect(original_url);
		}
		if (req.method === "POST") {
			const data = await getData(user_eri);
			if (data === null) throw "Error: ERL Invalid";
			const { password }: { password: string } = req.body;
			if (data?.password) {
				if (!password) throw "Error: Requires a password";
				const x = await bcrypt.compare(password, data.password);
				if (!x) throw "Error: Password does not match";
				const original_url = decrypt(data.encrypted_url);
				return res.status(200).json(original_url);
			}
			// throw if given password
			if (password) throw "Error: ERL Password Error";
			const original_url = decrypt(data.encrypted_url);
			return res.status(200).json(original_url);
		}
		throw "Error: Unknown Error";
	} catch (err) {
		return res.json({ err });
	}
}
