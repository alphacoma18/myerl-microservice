import React from "react";
import styles from "./index.module.css";
const Contact: React.FC = () => {
	return (
		<>
			<div className={styles.flexContact}>
				<h1 className={styles.headerContact} id="link-contact">
					Contact Us
				</h1>
				<div className={styles.itemContact}></div>
			</div>
		</>
	);
};

export default Contact;
