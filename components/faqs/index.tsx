import React from "react";
import styles from "./index.module.css";
type Props = {
	header: string;
	description: string;
};
const Faqs: React.FC<Props> = ({ header, description }) => {
	return (
		<>
			<details className={styles.itemFaqs}>
				<summary className={styles.summary} title={header}>
					{header}
				</summary>
				{description}
			</details>
		</>
	);
};
const FaqsAll: React.FC = () => {
	return (
		<>
			<div className={styles.flexFaqs}>
				<h2 className={styles.headerFaqs} id="link-faqs">
					Frequently Asked Questions
				</h2>
				<Faqs
					header={"Q: What services do we offer?"}
					description={
						"A: We provide a unique encrypted url shortening microservice with or without password."
					}
				/>
				<Faqs
					header={"Q: Is the service really free?"}
					description={
						"A: Yes. It's because MyERL microservice and its database is generously provided by trusted and regarded companies such as Vercel and MongoDB"
					}
				/>
				<Faqs
					header={
						"Q: As a developer, can I use the service for my applications?"
					}
					description={
						"A: Yes. On top of that, MyERL also provides various methods for developers to easily generate ERLs. (Refer to the API section below)"
					}
				/>
				<Faqs
					header={
						"Q: Why am I being redirected to this site when I try to access the ERL?"
					}
					description={
						"A: The ERL is protected by a password that was set by the original client. You can verify and access it on this site by clicking &apos;redirects&apos; then &apos;Password-Protect&apos;."
					}
				/>
				<Faqs
					header={"Q: What limitations are there?"}
					description={
						"A: While there are no limitations on how many ERLs you can generate, we just ask you to please keep the URLs meaningful and to be of wise use"
					}
				/>
				<Faqs
					header={"Q: Can I change the ERL password?"}
					description={
						"A: No. To preserve the integrity of the microservice in preserving privacy, you cannot."
					}
				/>
				<Faqs
					header={"Q: What are the Terms and Conditions?"}
					description={"A: You can find them below."}
				/>
				<Faqs
					header={"Q: What permissions do I have on my ERLs?"}
					description={
						"A: You are free to use and distribute the ERLs to your needs but is subject to our terms."
					}
				/>
				<Faqs
					header={"Q: Do the generated ERL's expire?"}
					description={
						"A: It does not but is possible to be unaccessible in the unlikely event that the database goes down. Read more at the Terms and Conditions, Disclaimer section"
					}
				/>
				<Faqs
					header={
						"Q: Can I fork, modify, and distribute the open source codes of the microservice at GitHub?"
					}
					description={
						"A: This microservice is under the copyright license of MIT and so you are free to do so while abiding by the license&apos;s terms."
					}
				/>
			</div>
		</>
	);
};
export default FaqsAll;
