import React, { useState } from "react";
import styles from "./index.module.css";
const IO: React.FC = () => {
	const [urlInput, setUrlInput] = useState<string>("");

	return (
		<>
			<form className={styles.inputDiv}>
				<input
					type="text"
					className={styles.generateURLInput}
					placeholder=">>> Enter your URL"
					required
					minLength={10}
					maxLength={2048}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUrlInput(e.currentTarget.value)
					}
					value={urlInput}
				/>
			</form>
			<div className={styles.outputDiv}>
				<input
					type="text"
					className={styles.generateURLOutput}
					placeholder="<<< Await Shortened Encrypted URL"
					readOnly
				/>
			</div>
		</>
	);
};

export default IO;
