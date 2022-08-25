import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
const Nav: React.FC = () => {
	const [isToggled, setIsToggled] = useState<boolean>(false);
	return (
		<nav className={styles.outermostNav}>
			<div className={styles.myerlLogo}>
				<a href="." className={styles.myerlAnchor}>
					<Image src={"/logo/index.png"} width={120} height={60} />
				</a>
			</div>
			<div className={styles.myerlLogoDark}>
				<a href="." className={styles.myerlAnchor}>
					<Image
						src={"/logo/index_dark_2.png"}
						width={120}
						height={60}
					/>
				</a>
			</div>
			<div className={styles.myerlMobile}>
				<Image
					src={"/logo/logo.png"}
					width={60}
					height={60}
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
					className={styles.closeMenu}
					onClick={() => setIsToggled((prev) => !prev)}
				>
					&times;
				</a>
				<Link href="/">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
					>
						<i className="icon-expeditedssl"></i>
						<span className={styles.linkSpan}>Password</span>
					</a>
				</Link>
				<Link href="/#link-home">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
					>
						<i className="icon-home"></i>
						<span className={styles.linkSpan}>Home</span>
					</a>
				</Link>
				<Link href="/#link-about">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
					>
						<i className="icon-bank"></i>
						<span className={styles.linkSpan}>About</span>
					</a>
				</Link>
				<Link href="/#link-faqs">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
					>
						<i className="icon-info-circled"></i>
						<span className={styles.linkSpan}>FAQs</span>
					</a>
				</Link>
				<Link href="/#link-terms">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
					>
						<i className="icon-doc-text-inv"></i>
						<span className={styles.linkSpan}>T&Cs</span>
					</a>
				</Link>
				<Link href="/#link-api">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
					>
						<i className="icon-code"></i>
						<span className={styles.linkSpan}>API</span>
					</a>
				</Link>
				<Link href="/#link-contact">
					<a
						className={styles.navLink}
						onClick={() => setIsToggled((prev) => !prev)}
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
