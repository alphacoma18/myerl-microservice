import React, { useState, useContext } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import GlobalContext from "../../utils/context";
const Nav: React.FC = () => {
	const { isRedirect, handleIsRedirect } = useContext(GlobalContext);
	const [isToggled, setIsToggled] = useState<boolean>(false);
	return (
		<nav className={styles.outermostNav}>
			<div className={styles.myerlLogo}>
				<a
					href="."
					className={styles.myerlAnchor}
					title="Reload page"
					aria-label="Reload page"
				>
					<Image
						src={"/logo/index.png"}
						width={120}
						height={60}
						alt="MyERL light logo"
						title="MyERL light logo"
						aria-label="MyERL light logo"
					/>
				</a>
			</div>
			<div className={styles.myerlLogoDark}>
				<a
					href="."
					className={styles.myerlAnchor}
					title="Reload Page"
					aria-label="Reload Page"
				>
					<Image
						src={"/logo/index_dark_2.png"}
						width={120}
						height={60}
						alt="MyERL Dark Logo"
						title="MyERL dark logo"
						aria-label="MyERL dark logo"
					/>
				</a>
			</div>
			<div className={styles.myerlMobile}>
				<Image
					src={"/logo/logo.png"}
					width={60}
					height={60}
					alt="MyERL Mobile Logo"
					title="MyERL Mobile Logo"
					aria-label="MyERL mobile logo"
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
				<button
					className={styles.closeMenu}
					onClick={() => setIsToggled((prev) => !prev)}
					title="Close menu bar"
					aria-label="Close menu bar"
				>
					&times;
				</button>
				<Link href="/">
					<a
						className={styles.navLink}
						onClick={() => {
							setIsToggled((prev) => !prev);
							handleIsRedirect();
						}}
						title="Navigate to password"
						aria-label="Navigate to password"
					>
						<i className="icon-link-ext-alt"></i>
						<span className={styles.linkSpan}>
							{isRedirect ? "Redirects" : "Generate"}
						</span>
					</a>
				</Link>
				<Link href="/#link-home">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						title="Navigate to home"
						aria-label="Navigate to home"
					>
						<i className="icon-home"></i>
						<span className={styles.linkSpan}>Home</span>
					</a>
				</Link>
				<Link href="/#link-about">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						title="Navigate to about"
						aria-label="Navigate to about"
					>
						<i className="icon-bank"></i>
						<span className={styles.linkSpan}>About</span>
					</a>
				</Link>
				<Link href="/#link-faqs">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						title="Navigate to FAQs"
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
						title="Navigate to terms and conditions"
						aria-label="Navigate to terms and conditions"
					>
						<i className="icon-doc-text-inv"></i>
						<span className={styles.linkSpan}>T&Cs</span>
					</a>
				</Link>
				<Link href="/#link-api">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
						title="Navigate to API"
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
						title="Navigate to contact"
						aria-label="Navigate to contact"
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
