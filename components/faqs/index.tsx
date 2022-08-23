import React from "react";
import styles from "./index.module.css";
type Props = {
	header: string;
	description: string;
};
const Faqs: React.FC<Props> = ({ header, description }) => {
	return (
		<>
			<div className={styles.itemFaqs}>
				<details>
					<summary className={styles.summary}>{header}</summary>
					{description}
				</details>
			</div>
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
					description={"A: Yes, yes it is."}
				/>
				<Faqs
					header={"Q: What limitations are there?"}
					description={
						"A: While there are no limitations on how many ERLs you can generate, we just ask you to please keep the URLs meaningful and to be of use"
					}
				/>
				<Faqs
					header={"Q: Can I change the ERL password?"}
					description={
						"A: No. To preserve the integrity of the microservice in preserving privacy, you cannot."
					}
				/>
				<Faqs
					header={"Q: Where are the Terms and Conditions?"}
					description={
						"A: You can find them below or just click here."
					}
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
						"A: Technically it will not for as long as the web is still around or this site doesn't get nuked."
					}
				/>
			</div>
		</>
	);
};
export default FaqsAll;
