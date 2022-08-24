import React from "react";
import styles from "./index.module.css";
const Credits: React.FC = () => {
	return (
		<>
			<h4 className={styles.credits}>
				MIT License Copyright (c) 2022{" "}
				<a href="https://www.linkedin.com/in/alpha-coma/">
					Alpha Romer N. Coma
				</a>
			</h4>
		</>
	);
};

export default Credits;
