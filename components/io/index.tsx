import React, { useState, useEffect, useRef, useContext } from "react";
import GlobalContext from "../../utils/context";
import { axios } from "../../utils/axios/index";
import Spinner from "../../components/spinner/index";
import styles from "./index.module.css";
import Redirects from "./redirects";
const IO: React.FC = () => {
	const { isRedirect } = useContext(GlobalContext);
	const inputRef = useRef<HTMLInputElement>(null);
	const outputRef = useRef<HTMLInputElement>(null);
	const [urlInput, setUrlInput] = useState<string>("");
	const [erlOutput, setErlOutput] = useState<string>("");
	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const [error, setError] = useState<string>("");
	const [showError, setShowError] = useState<boolean>(false);

	const [password, setPassword] = useState<string>("");
	const [isProtected, setIsProtected] = useState<boolean>(false);
	// parent props to children
	const [redirectInput, setRedirectInput] = useState<string>("");
	const [redirectPassword, setRedirectPassword] = useState<string>("");
	const regex =
		/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			setShowSpinner(true);
			if (urlInput.length <= 10)
				throw "Error: URL must be minimum of 10 characters";
			const pass = regex.test(urlInput);
			if (!pass) throw "Error: Invalid URL";
			const res = await axios.post("/", {
				urlInput,
				password,
			});
			if (res.data.err) throw `${res.data.err}`;
			const x: string = res.data?.erl;
			if (!x) throw "Error: Server Error";
			setErlOutput(x);
			setShowSpinner(false);
			return outputRef.current?.focus();
		} catch (err: any) {
			setShowSpinner(false);
			setError(err);
			setShowError(true);
			inputRef.current?.focus();
		}
	}
	function handleReset() {
		setUrlInput("");
		setPassword("");
		setErlOutput("");
	}
	useEffect(() => {
		setShowError(false);
	}, [urlInput, isRedirect, redirectInput, redirectPassword]);

	return (
		<>
			{showSpinner && <Spinner />}
			<div className={showError ? styles.errorShow : styles.errorHide}>
				<h3>{error}</h3>
			</div>
			{isRedirect ? (
				<>
					<div className={styles.flexIOForm}>
						<form
							className={styles.inputDiv}
							onSubmit={handleSubmit}
							id="submit-form"
							title="Generate ERL Form"
							aria-label="Generate ERL Form"
						>
							<input
								ref={inputRef}
								type="text"
								className={styles.generateURLInput}
								placeholder=">>> Enter your valid URL (min. 10 chars)"
								required
								minLength={10}
								maxLength={2048}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setUrlInput(e.currentTarget.value)}
								value={urlInput}
								title="Enter your valid URL (min. 10 chars)"
								aria-label="Enter your valid URL (min. 10 chars)"
							/>
							{isProtected && (
								<>
									<input
										type="password"
										className={styles.generateURLPassword}
										placeholder=">>> Enter your password (min. 10 chars)"
										required={isProtected}
										minLength={10}
										maxLength={50}
										onChange={(
											e: React.ChangeEvent<HTMLInputElement>
										) => setPassword(e.currentTarget.value)}
										value={password}
										title="Enter your password (min. 10 chars)"
										aria-label="Enter your password (min. 10 chars)"
									/>
								</>
							)}
						</form>
						<div className={styles.outputDiv}>
							<input
								type="text"
								className={styles.generateURLOutput}
								placeholder="<<< Await shortened Encrypted URL"
								readOnly
								ref={outputRef}
								value={erlOutput}
								title="Await sour shortened encrypted URL"
								aria-label="Await sour shortened encrypted URL"
							/>
						</div>
						<div className={styles.flexFormButtons}>
							<button
								className={styles.itemFormButtons}
								type="reset"
								title="Clear all fields"
								aria-label="Clear all fields"
								onClick={handleReset}
							>
								Reset
							</button>
							<button
								className={styles.itemFormButtons}
								type="submit"
								title="Submit button"
								aria-label="Submit button"
								form="submit-form"
							>
								Submit
							</button>
							<button
								className={styles.itemFormButtons}
								type="button"
								title="Set a password from the ERL"
								aria-label="Set a password from the ERL"
								onClick={() => {
									setIsProtected((prev) => !prev);
									setPassword("");
								}}
							>
								Password-Protect
							</button>
							<button
								className={styles.itemFormButtons}
								type="button"
								title="Copy to clipboard"
								aria-label="Copy to clipboard"
								onClick={() =>
									navigator.clipboard.writeText(erlOutput)
								}
							>
								Copy ERL
							</button>
						</div>
					</div>
				</>
			) : (
				<Redirects
					data={{
						setRedirectInput,
						redirectInput,
						setRedirectPassword,
						redirectPassword,
						setError,
						setShowError,
						setShowSpinner,
					}}
				/>
			)}
		</>
	);
};

export default IO;
