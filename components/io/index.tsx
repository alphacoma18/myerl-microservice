import React, { useState, useEffect, useRef } from "react";
import { axios } from "../../utils/axios/index";
import styles from "./index.module.css";
const IO: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const outputRef = useRef<HTMLInputElement>(null);
	const [urlInput, setUrlInput] = useState<string>("");
	const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [showError, setShowError] = useState<boolean>(false);
	const regex =
		/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			setSubmitDisabled((e) => !e);
			const pass = regex.test(urlInput);
			if (urlInput.length < 10)
				throw "Error: URL must be minimum of 10 characters";
			if (!pass) throw "Error: Invalid URL";
			await axios.post(urlInput);
			outputRef.current?.focus();
		} catch (err: any) {
			setError(err);
			setShowError(true);
			setSubmitDisabled((e) => !e);
			inputRef.current?.focus();
		}
	}
	function handleClear() {
		setUrlInput((prev) => "");
		inputRef.current?.focus();
	}
	useEffect(() => {
		setShowError(false);
	}, [urlInput]);

	return (
		<>
			<div className={showError ? styles.errorShow : styles.errorHide}>
				<h3>{error}</h3>
			</div>
			<form
				id="url-input-form"
				className={styles.inputDiv}
				onSubmit={handleSubmit}
			>
				<input
					ref={inputRef}
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
					ref={outputRef}
				/>
			</div>
		</>
	);
};

export default IO;
