import React from "react";
import styles from "./index.module.css";
const Contact: React.FC = () => {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			console.log("Hello");
		} catch (err) {}
	}
	return (
		<>
			<div className={styles.flexContact}>
				<h1 className={styles.headerContact} id="link-contact">
					Contact Us
				</h1>
				<div className={styles.itemContact}>
					<h1>Hello World</h1>
				</div>
				<div className={styles.itemContact}>
					<form
						action="post"
						className={styles.flexFormInput}
						onSubmit={handleSubmit}
					>
						<h3>Have a message for us? Send us an email!</h3>
						<input
							className={styles.itemFormInput}
							type="text"
							required
							minLength={10}
							placeholder=">>> Your Name"
							autoComplete="off"
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
						/>
						<textarea
							className={styles.itemFormInput}
							required
							minLength={25}
							placeholder=">>> Your Message"
						></textarea>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
