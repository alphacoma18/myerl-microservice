import ERL from "../../utils/db";
import { decrypt } from "../../utils/cryptr";
import { NextApiRequest, NextApiResponse } from "next";
async function ErlHandler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { url } = req;
		if (url?.length !== 13) throw "Error: Invalid ERL";
		const user_eri = url.slice(5, 13);
		const { encrypted_url } = await ERL.findOne({
			generated_url: user_eri,
		});
		if (!encrypted_url) throw "Error: ERL Invalid";
		const original_url = decrypt(encrypted_url);
		res.status(200).redirect(original_url);
	} catch (err: any) {
		res.json({ err });
	}
}
export default ErlHandler;
