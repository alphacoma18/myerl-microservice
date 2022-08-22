import React from "react";
import styles from "./index.module.css";
const Nav: React.FC = () => {
	return (
        <nav className={styles.outermostNav}>
            <div></div>
			<div>
				<button className={styles.navButton}>Home</button>
				<button className={styles.navButton}>About</button>
				<button className={styles.navButton}>FAQs</button>
				<button className={styles.navButton}>T&Cs</button>
				<button className={styles.navButton}>API</button>
				<button className={styles.navButton}>Contact Us</button>
			</div>
		</nav>
	);
};

export default Nav;
