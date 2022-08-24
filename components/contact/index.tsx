import React, { useState } from "react";
import styles from "./index.module.css";
import { axios } from "../../utils/axios";
const Contact: React.FC = () => {
	const [senderName, setSenderName] = useState<string>("");
	const [senderEmail, setSenderEmail] = useState<string>("");
	const [senderMessage, setSenderMessage] = useState<string>("");
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			console.log(senderName, senderEmail, senderMessage);
		} catch (err) {}
	}
	return (
		<>
			<div className={styles.flexContact}>
				<h1 className={styles.headerContact} id="link-contact">
					Contact Us
				</h1>
				<div className={styles.itemContact}>
					<form
						action="post"
						className={styles.flexFormInput}
						onSubmit={handleSubmit}
					>
						<h3 className={styles.headerEmail}>
							Have a message for us? Send us an email!
						</h3>
						<input
							className={styles.itemFormInput}
							type="text"
							required
							minLength={10}
							placeholder=">>> Your Name"
							autoComplete="off"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>
							) => setSenderName(e.currentTarget.value)}
							value={senderName}
						/>
						<input
							className={styles.itemFormInput}
							type="email"
							required
							minLength={10}
							placeholder=">>> Your Google Email"
							autoComplete="off"
							pattern="([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@(?:gmail|GMAIL)([.])(?:com|COM)"
							title=">>> Your Google Email"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>
							) => setSenderEmail(e.currentTarget.value)}
							value={senderEmail}
						/>
						<textarea
							className={styles.itemFormInput}
							required
							minLength={25}
							placeholder=">>> Your Message"
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setSenderMessage(e.currentTarget.value)}
							value={senderMessage}
						></textarea>
						<div className={styles.flexFormButtons}>
							<button
								className={styles.itemFormButtons}
								type="reset"
							>
								Reset
							</button>
							<button
								className={styles.itemFormButtons}
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
