import React from "react";
import styles from "./index.module.css";
const TermsAndConditions = () => {
	return (
		<>
			<div className={styles.flexTerms}>
				<h1 className={styles.headerTerms} id="link-terms">
					Terms and Conditions
				</h1>
				<p>
					These terms and conditions outline the rules and regulations
					for the use of MyERL Microservice&apos;s site and Services.
				</p>
				<div className={styles.itemTerms}>
					<p>
						By accessing this site we assume you accept these terms
						and conditions in full. Do not continue to use MyERL
						Microservice&apos;s site and services if you do not
						accept all of the terms and conditions stated on this
						section.
					</p>
					<br />
					<details>
						<summary
							className={styles.summary}
							title={"Appropriate Service Use"}
						>
							Appropriate Service Use
						</summary>
						<ul>
							<li>
								MyERL Microservice reserves the right to
								prohibit anyone from service and/or access to
								its servers and/or services
							</li>
							<li>
								MyERL Microservice does not allow any content
								which breaches our Acceptable Use Policy to be
								stored on its servers.
							</li>
							<li>
								MyERL Microservice reserves the right to move
								your data to a different server with no prior
								notice.
							</li>
							<li>
								You acknowledge indemnifying MyERL Microservice
								for any damages, losses, or expenses incurred as
								a consequence of any action or claim alleging
								that the data, content, or other material
								breaches the Acceptable Use Policy or Fair Use
								Policy.
							</li>
						</ul>
						<br />
					</details>
					<details>
						<summary className={styles.summary} title="Disclaimer">
							Disclaimer
						</summary>
						<p>
							{" "}
							To the fullest extent permitted by applicable law,
							we disclaim any representations, warranties, and
							conditions about our site and its use (including,
							without limitation, any implied warranties of
							satisfactory quality, fitness for purpose, and/or
							the use of reasonable care and skill). Nothing in
							this disclaimer is intended to:
						</p>
						<br />
						<ul>
							<li>
								limit or exclude our or your liability for fraud
								or fraudulent misrepresentation;
							</li>
							<li>
								limit any of our or your liabilities in any way
								that is not permitted under applicable law; or
							</li>
							<li>
								exclude any of our or your liabilities that may
								not be excluded under applicable law.
							</li>
						</ul>
						<br />
						<p>
							To the extent that the site and the information and
							services on the website are provided free of charge,
							we will not be liable for any loss or damage of any
							nature.
						</p>
						<p>
							MyERL Microservice does not guarantee to back up
							your data and whilst every attempt would be made in
							the unlikely event of any corruption or hardware
							failure, MyERL Microservice cannot guarantee to be
							able to replace lost data.
						</p>
						<br />
					</details>
					<details>
						<summary
							className={styles.summary}
							title="Content Liability"
						>
							Content Liability
						</summary>
						<p>
							We take no responsibility or liability for any
							content on your works. You undertake to indemnify
							and defend us against any and all claims arising
							from or relating to your works. No link(s) may
							appear on any content of your work or in any context
							that contains information or materials that might be
							regarded as malicious, obscene, or illegal, or that
							infringes, otherwise violates, or encourages the
							infringement or other violation of any third party
							rights.
						</p>
						<p>
							While we make every effort to ensure that the
							information on this site is authentic, we do not
							guarantee its completeness or accuracy, nor do we
							guarantee that the site will be available at any
							time due to possible downtimes by the servers.
						</p>
						<br />
					</details>
					<details>
						<summary className={styles.summary} title="Liability">
							Liability
						</summary>
						<p>
							MyERL Microservice shall not be liable for any loss
							or damage of any nature incurred by You as a result
							of or in connection with any breach of this
							agreement by you or any act, misrepresentation,
							mistake, or omission committed by You or on Your
							behalf.
						</p>
						<br />
						<p>
							MyERL Microservice will not be liable for any
							indirect loss, consequential loss, loss of profit,
							revenue, data, or goodwill suffered by You, or for
							any wasted management time or failure to make
							anticipated savings, or for any liability You incur
							to any third party arising in any way in connection
							with this agreement or otherwise, whether or not
							such loss was discussed by the parties prior to
							contract, or for any account for profit, costs, or
							expenses arising from such.
						</p>
						<br />
					</details>
				</div>
			</div>
		</>
	);
};

export default TermsAndConditions;
