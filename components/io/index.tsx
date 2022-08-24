import React, { useState, useEffect, useRef } from "react";
import { axios } from "../../utils/axios/index";
import Spinner from "../../components/spinner/index";
import styles from "./index.module.css";
const IO: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const outputRef = useRef<HTMLInputElement>(null);
	const [urlInput, setUrlInput] = useState<string>("");
	const [erlOutput, setErlOutput] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [showSpinner, setShowSpinner] = useState<boolean>(false);
	const [showError, setShowError] = useState<boolean>(false);
	const regex =
		/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			setShowSpinner(true);
			e.preventDefault();
			const pass = regex.test(urlInput);
			if (urlInput.length < 10)
				throw "Error: URL must be minimum of 10 characters";
			if (!pass) throw "Error: Invalid URL";
			const res = await axios.post("/", { urlInput });
			if (res.status === 401) throw `${res.data.err}`;
			const x = res.data?.erl;
			if (!x) throw "Error: Server Error";
			setErlOutput(x);
			setShowSpinner(false);
			outputRef.current?.focus();
		} catch (err: any) {
			setError(err);
			setShowError(true);
			setShowSpinner(false);
			inputRef.current?.focus();
		}
	}
	useEffect(() => {
		setShowError(false);
	}, [urlInput]);

	return (
		<>
			{showSpinner && <Spinner />}
			<div className={showError ? styles.errorShow : styles.errorHide}>
				<h3>{error}</h3>
			</div>
			<div className={styles.flexIOForm}>
				<form className={styles.inputDiv} onSubmit={handleSubmit}>
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
						title="Enter Your valid URL (min. 10 chars)"
					/>
				</form>
				<div className={styles.outputDiv}>
					<input
						type="text"
						className={styles.generateURLOutput}
						placeholder="<<< Await shortened Encrypted URL"
						readOnly
						ref={outputRef}
						value={erlOutput}
						title="Await Your Shortened Encrypted URL"
					/>
				</div>
			</div>
		</>
	);
};

export default IO;
