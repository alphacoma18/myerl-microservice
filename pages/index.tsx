import { NextPage } from "next";
import Nav from "../components/nav/index";
import styles from "./index.module.css";
import WhyChoose from "../components/whyChoose/index";
import IO from "../components/io/index";
import FaqsAll from "../components/faqs/index";
import TermsAndConditions from "../components/t&c";
import Contact from "../components/contact";
import Credits from "../components/credits";
import API from "../components/api";
const App: NextPage = () => {
	return (
		<section className={styles.outermostSection}>
			<Nav />
			<div className={styles.widthReducer}>
				<div className={styles.mainHeader}>
					<h1 id="link-home">
						<a
							href="."
							title="Reload Page"
							aria-label="Reload Page"
						>
							MyERL: Encrypted URL Microservice
						</a>
					</h1>
					<q>
						The URL shortener that has your
						privacy&apos;s&nbsp;back.
					</q>
				</div>
				<IO />
				<hr className="horizontalRule" />
				<WhyChoose />
				<hr className="horizontalRule" />
				<FaqsAll />
				<hr className="horizontalRule" />
				<TermsAndConditions />
				<hr className="horizontalRule" />
				<API />
				<hr className="horizontalRule" />
				<Contact />
				<hr className="horizontalRule" />
				<Credits />
			</div>
		</section>
	);
};

export default App;
