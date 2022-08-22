import React, { useState } from "react";
import styles from "./index.module.css";
const IO: React.FC = () => {
	const [urlInput, setUrlInput] = useState<string>("");
	const [error, setError] = useState<string>("");
	const regex =
		/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
	function handleSubmit() {
		try {
			const pass = regex.test(urlInput);
			if (!pass) throw "Error: Invalid URL";
		} catch (err: any) {
			setError(err.message);
		}
	}

	return (
		<>
			<form className={styles.inputDiv} onSubmit={handleSubmit}>
				<input
					type="text"
					className={styles.generateURLInput}
					placeholder=">>> Enter your valid URL (min. 10 chars)"
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
