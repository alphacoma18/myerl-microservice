import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
const Nav: React.FC = () => {
	return (
		<nav className={styles.outermostNav}>
			<div></div>
			<div className={styles.navLinkHolder}>
				<Link href="/#link-home">
					<a className={styles.navLink}>Home</a>
				</Link>
				<Link href="/#link-about">
					<a className={styles.navLink}>About</a>
				</Link>
				<Link href="/#link-faqs">
					<a className={styles.navLink}>FAQs</a>
				</Link>
				<Link href="/#link-terms">
					<a className={styles.navLink}>T&Cs</a>
				</Link>
				<Link href="/#link-api">
					<a className={styles.navLink}>API</a>
				</Link>
				<Link href="/#link-contact">
					<a className={styles.navLink}>Contact Us</a>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
