import nodeMailer from "nodemailer";

async function NodeMailer(subject: string, html: string) {
	try {
		const transporter = nodeMailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.ALPHA_EMAIL,
				pass: process.env.ALPHA_PASSWORD,
			},
		});
		const mailOptions = {
			from: process.env.ALPHA_EMAIL,
			to: process.env.ALPHA_EMAIL,
			subject: subject,
			html: html,
		};
		await transporter.sendMail(mailOptions);
		return;
	} catch (error) {
		console.log(error);
		return;
	}
}
export default async function MyERLMailer(
	name: string,
	googleEmail: string,
	message: string
) {
	try {
		const subject = `<MyERL-Mailer>: A new message from ${name}`;
		const html = `
    <div style="max-width: 600px; padding: 16px; margin: auto;">
        <h1 style="text-align: center;">MyERL Microservice</h1>
        <h4 style="text-align: center;">The URL shortener that has your privacy's back.</p>
        <br />
        <p>A message relay from ${name}</p>
        <p>Valid email: ${googleEmail}</p>
        <br />
        <p>${message}</p>
        <br />
        <a style="display: block; text-align: center;" href="https://myerl.vercel.app">Visit The Site</a>
        <p>An automatic email from MyERL microservice</p>
    </div>
    
    `;
		await NodeMailer(subject, html);
	} catch (err) {
		console.log(err);
		return;
	}
}
