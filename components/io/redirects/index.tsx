import React, { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { axios } from "../../../utils/axios";
interface Props {
	data: {
		setRedirectInput: React.Dispatch<React.SetStateAction<string>>;
		redirectInput: string;
		setRedirectPassword: React.Dispatch<React.SetStateAction<string>>;
		redirectPassword: string;
		setError: React.Dispatch<React.SetStateAction<string>>;
		setShowError: React.Dispatch<React.SetStateAction<boolean>>;
	};
}

const Redirects = ({
	data: {
		setRedirectInput,
		redirectInput,
		setRedirectPassword,
		redirectPassword,
		setError,
		setShowError,
	},
}: Props) => {
	const router = useRouter();
	const [isProtected, setIsProtected] = useState<boolean>(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			const regex = /^(https:\/\/myerl.vercel.app\/api\/)([a-z0-9]{8})$/;
			const pass = regex.test(redirectInput);
			if (!pass) throw "Error: Invalid URL";
			const eri = redirectInput.slice(29, 37);
			const res = await axios.post(`/${eri}`, {
				password: redirectPassword,
			});
			if (res.data.err) throw `${res.data.err}`;
			return router.push(res.data);
		} catch (err: any) {
			setError(err);
			setShowError(true);
		}
	}
	function handleReset() {
		setRedirectInput("");
		setRedirectPassword("");
	}
	return (
		<>
			<div className={styles.flexRedirectForm}>
				<form
					className={styles.inputForm}
					onSubmit={handleSubmit}
					id="redirect-form"
					title="Verify and redirect to original URL form"
					aria-label="Verify and redirect to original URL form"
				>
					<input
						type="text"
						className={styles.receiveURLInput}
						placeholder=">>> Enter a valid ERL (37 chars)"
						required
						minLength={37}
						maxLength={37}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setRedirectInput(e.currentTarget.value)
						}
						value={redirectInput}
						title="Enter a valid ERL (37 chars)"
						aria-label="Enter a valid ERL (37 chars)"
					/>
					{isProtected && (
						<>
							<input
								type="password"
								className={styles.receiveURLPassword}
								placeholder=">>> Enter the ERL password (min. 10 chars)"
								required={isProtected}
								minLength={10}
								maxLength={50}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setRedirectPassword(e.currentTarget.value)}
								value={redirectPassword}
								title="Enter the ERL password (min. 10 chars)"
								aria-label="Enter the ERL password (min. 10 chars)"
							/>
						</>
					)}
				</form>
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
						title="Verify and go to link"
						aria-label="Verify and go to link"
						form="redirect-form"
					>
						Go to Link
					</button>
					<button
						className={styles.itemFormButtons}
						type="button"
						title="Input the password for the ERL"
						aria-label="Input the password for the ERL"
						onClick={() => {
							setIsProtected((prev) => !prev);
							setRedirectPassword("");
						}}
					>
						Password-Protected
					</button>
				</div>
			</div>
		</>
	);
};

export default Redirects;
