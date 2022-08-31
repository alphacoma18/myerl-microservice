import { NextApiRequest, NextApiResponse } from "next";
import MyERLMailer from "../../../utils/mailer";
interface IData {
	senderName: string;
	senderEmail: string;
	senderMessage: string;
}
export default async function MailHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { senderName, senderEmail, senderMessage }: IData = req.body;
		if (!senderName || !senderEmail || !senderMessage)
			throw "Error: Invalid Input";
		await MyERLMailer(senderName, senderEmail, senderMessage);
		return res.status(204).send("");
	} catch (err) {
		return res.json({ err });
	}
}
