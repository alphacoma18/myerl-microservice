import React from "react";
import styles from "./index.module.css";
const API: React.FC = () => {
	return (
		<>
			<div className={styles.flexApi}>
				<h2 className={styles.headerFaqs} id="link-api">
					API For Developers
				</h2>
				<div className={styles.itemTerms}></div>
			</div>
		</>
	);
};

export default API;
