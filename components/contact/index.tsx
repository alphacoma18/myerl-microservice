import React from "react";
import styles from "./index.module.css";
const Contact: React.FC = () => {
	return (
		<>
			<div className={styles.flexContact}>
				<h1 className={styles.headerContact} id="link-contact">
					Contact Us
				</h1>
				<div className={styles.itemContact}>
					<form action="post">
						<input
							className={styles.itemFormInput}
							type="text"
							minLength={4}
							required
						/>
						<input
							className={styles.itemFormInput}
							type="email"
							minLength={10}
							required
						/>
						<textarea
							className={styles.itemFormInput}
							required
						></textarea>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
