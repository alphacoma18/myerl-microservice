import React from "react";
import styles from "./index.module.css";
const API: React.FC = () => {
	return (
		<>
			<div className={styles.flexApi}>
				<h2 className={styles.headerApi} id="link-api">
					API For Developers
				</h2>
				<p>MyERL exposes an API to provide service for developers</p>
				<div className={styles.itemApi}>
					<div className={styles.itemApiCode}>
						<h3 className={styles.waysCode}>Fetch API</h3>
						<textarea
							className={styles.codeTextarea}
							readOnly
							spellCheck="false"
							title="MyERL exposed api sample code for JavaScript fetch API"
							aria-label="MyERL exposed api sample code for JavaScript fetch API"
							value={`
async function viaFetch() {
    const res = await fetch("https://myerl.vercel.app/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            urlInput: "<your url>",
			password: "<your password (optional)>"
        }),
    });
    const data = await res.json();
    return data;
}`}
						></textarea>
					</div>
					<div className={styles.itemApiCode}>
						<h3 className={styles.waysCode}>Axios Library</h3>
						<textarea
							className={styles.codeTextarea}
							readOnly
							spellCheck="false"
							title="MyERL exposed api sample code for JavaScript Axios Library"
							aria-label="MyERL exposed api sample code for JavaScript fetch API"
							value={`
import axios from "axios";
async function viaAxios() {
    const res = await axios.post("https://myerl.vercel.app/api", {
        urlInput: "<your url>",
        password: "<your password (optional)>",
    });
    return res;
}`}
						></textarea>
					</div>
					<div className={styles.itemApiCode}>
						<h3 className={styles.waysCode}>VS Code REST Client</h3>
						<textarea
							className={styles.codeTextarea}
							readOnly
							spellCheck="false"
							title="MyERL exposed api sample code for VS Code REST Client"
							aria-label="MyERL exposed api sample code for VS Code REST Client"
							value={`
POST https://myerl.vercel.app/api
Content-Type: application/json

{
    "urlInput": "<your url>",
    "password": "<your password (optional)>"
}`}
						></textarea>
					</div>
				</div>
			</div>
		</>
	);
};

export default API;
