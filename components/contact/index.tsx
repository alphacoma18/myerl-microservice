import React, { useState } from "react";
import styles from "./index.module.css";
import { axios } from "../../utils/axios";
import Spinner from "../spinner";
const Contact: React.FC = () => {
	const [senderName, setSenderName] = useState<string>("");
	const [senderEmail, setSenderEmail] = useState<string>("");
	const [senderMessage, setSenderMessage] = useState<string>("");
	const [showSpinner, setShowSpinner] = useState<boolean>(false);
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			setShowSpinner(true);
			await axios.post("/mail", {
				senderName,
				senderEmail,
				senderMessage,
			});
			handleClear();
			setShowSpinner(false);
		} catch (err) {
			handleClear();
			setShowSpinner(false);
		}
	}
	function handleClear() {
		setSenderName("");
		setSenderEmail("");
		setSenderMessage("");
	}
	return (
		<>
			{showSpinner && <Spinner />}
			<div className={styles.flexContact}>
				<h2 className={styles.headerContact} id="link-contact">
					Contact Us
				</h2>
				<div className={styles.itemContact}>
					<form
						action="post"
						className={styles.flexFormInput}
						onSubmit={handleSubmit}
						title="Contact us form"
						aria-label="Contact us form"
					>
						<h3 className={styles.headerEmail}>
							Have a message for us?
							Send&nbsp;us&nbsp;an&nbsp;email!
							(&nbsp;not&nbsp;saved&nbsp;)
						</h3>
						<input
							className={styles.itemFormInput}
							type="text"
							required
							minLength={4}
							maxLength={100}
							placeholder=">>> Your Name"
							autoComplete="off"
							autoCorrect="off"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>
							) => setSenderName(e.currentTarget.value)}
							value={senderName}
							title="Enter your name"
							aria-label="Enter your name"
						/>
						<input
							className={styles.itemFormInput}
							type="email"
							required
							minLength={10}
							maxLength={30}
							placeholder=">>> Your Google Email"
							autoComplete="off"
							pattern="([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@(?:gmail|GMAIL)([.])(?:com|COM)"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>
							) => setSenderEmail(e.currentTarget.value)}
							value={senderEmail}
							title="Enter your Google Email"
							aria-label="Enter your Google Email"
						/>
						<textarea
							className={styles.itemFormTextarea}
							required
							minLength={25}
							maxLength={2028}
							placeholder=">>> Your Message"
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setSenderMessage(e.currentTarget.value)}
							value={senderMessage}
							title="Enter your message"
							aria-label="Enter your message"
						></textarea>
						<div className={styles.flexFormButtons}>
							<button
								className={styles.itemFormButtons}
								type="reset"
								onClick={handleClear}
								title="Clear all fields"
								aria-label="Clear all fields"
							>
								Reset
							</button>
							<button
								className={styles.itemFormButtons}
								type="submit"
								title="Submit Form"
								aria-label="Submit Form"
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
