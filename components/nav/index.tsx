import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
const Nav: React.FC = () => {
	const [isToggled, setIsToggled] = useState<boolean>(false);
	return (
		<nav className={styles.outermostNav}>
			<div className={styles.myerlLogo}>
				<a
					href="."
					className={styles.myerlAnchor}
					aria-label="Reload Page"
				>
					<Image
						src={"/logo/index.png"}
						width={120}
						height={60}
						alt="MyERL Light Logo"
					/>
				</a>
			</div>
			<div className={styles.myerlLogoDark}>
				<a
					href="."
					className={styles.myerlAnchor}
					aria-label="Reload Page"
				>
					<Image
						src={"/logo/index_dark_2.png"}
						width={120}
						height={60}
						alt="MyERL Dark Logo"
					/>
				</a>
			</div>
			<div className={styles.myerlMobile}>
				<Image
					src={"/logo/logo.png"}
					width={60}
					height={60}
					alt="MyERL Mobile Logo"
					onClick={() => setIsToggled((prev) => !prev)}
				/>
			</div>
			<div
				className={
					isToggled
						? styles.navLinkHolderToggled
						: styles.navLinkHolder
				}
			>
				<a
					href="javascript:void(0);"
					className={styles.closeMenu}
					onClick={() => setIsToggled((prev) => !prev)}
					aria-label="Close Menu Bar"
				>
					&times;
				</a>
				<Link href="/">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						aria-label="Navigate to password"
					>
						<i className="icon-expeditedssl"></i>
						<span className={styles.linkSpan}>Password</span>
					</a>
				</Link>
				<Link href="/#link-home">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						aria-label="Navigate to Home"
					>
						<i className="icon-home"></i>
						<span className={styles.linkSpan}>Home</span>
					</a>
				</Link>
				<Link href="/#link-about">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						aria-label="Navigate to About"
					>
						<i className="icon-bank"></i>
						<span className={styles.linkSpan}>About</span>
					</a>
				</Link>
				<Link href="/#link-faqs">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						aria-label="Navigate to FAQs"
					>
						<i className="icon-info-circled"></i>
						<span className={styles.linkSpan}>FAQs</span>
					</a>
				</Link>
				<Link href="/#link-terms">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						aria-label="Navigate to Terms and Conditions"
					>
						<i className="icon-doc-text-inv"></i>
						<span className={styles.linkSpan}>T&Cs</span>
					</a>
				</Link>
				<Link href="/#link-api">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						aria-label="Navigate to API"
					>
						<i className="icon-code"></i>
						<span className={styles.linkSpan}>API</span>
					</a>
				</Link>
				<Link href="/#link-contact">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						aria-label="Navigate to Contact"
					>
						<i className="icon-mail-alt"></i>
						<span className={styles.linkSpan}>Contact</span>
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
