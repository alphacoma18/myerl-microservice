import { NextApiRequest, NextApiResponse } from "next";
import MyERLMailer from "../../../utils/mailer";
export default async function MailHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { senderName, senderEmail, senderMessage } = req.body;
		if (!senderName || !senderEmail || !senderMessage)
			throw "Error: Invalid Input";
		await MyERLMailer(senderName, senderEmail, senderMessage);
		res.status(204).send("");
	} catch (err) {
		console.log(err);
		res.json({ err });
	}
}
