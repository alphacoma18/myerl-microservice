import { NextPage } from "next";
import Nav from "../components/nav/index";
import styles from "./index.module.css";
import WhyChoose from "../components/whyChoose/index";
import IO from "../components/io/index";
import FaqsAll from "../components/faqs/index";
const App: NextPage = () => {
	return (
		<section className={styles.outermostSection}>
			<Nav />
			<div className={styles.widthReducer}>
				<div className={styles.mainHeader}>
					<h1 id="link-home">MyERL: Encrypted URL Microservice</h1>
					<q>
						The URL shortener that has your
						privacy&apos;s&nbsp;back.
					</q>
				</div>
				<IO />
				<br />
				<hr className="horizontalRule" />
				<WhyChoose />
				<hr className="horizontalRule" />
				<FaqsAll />
				<hr className="horizontalRule" />
			</div>
		</section>
	);
};

export default App;
