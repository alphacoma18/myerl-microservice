import React from "react";
import styles from "./index.module.css";
const Credits: React.FC = () => {
	return (
		<>
			<h4 className={styles.credits}>
				MIT License Copyright (c) 2022{" "}
				<a
					href="https://www.linkedin.com/in/alpha-coma/"
					aria-label="Redirect to MyERL developer LinkedIn profile"
					rel="noopener noreferrer"
					target={"_blank"}
				>
					Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma
				</a>
			</h4>
		</>
	);
};

export default Credits;
