import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
const Nav: React.FC = () => {
	return (
		<nav className={styles.outermostNav}>
			<div></div>
			<div>
				<Link href="#">
					<a className={styles.navButton}>Home</a>
				</Link>
				<Link href="#link-about">
					<a className={styles.navButton}>About</a>
				</Link>
				<a href="#link-faqs" className={styles.navButton}>
					FAQs
				</a>
				<button className={styles.navButton}>T&Cs</button>
				<button className={styles.navButton}>API</button>
				<button className={styles.navButton}>Contact Us</button>
			</div>
		</nav>
	);
};

export default Nav;
