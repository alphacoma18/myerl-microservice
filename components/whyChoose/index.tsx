import React from "react";
import styles from "./index.module.css";

const WhyChoose: React.FC = () => {
	return (
		<>
			<div className={styles.flexWhyChoose}>
				<h2 className={styles.headerWhyChoose} id="link-about">
					Why choose MyERL Microservice?
				</h2>
				<div className={styles.itemWhyChoose}>
					<h3>Encrypted URLs (ERL)</h3>
					<ul>
						<li>
							Unlike other URL shorteners, ERL heavily encrypts
							your URL and makes it so that only the application
							can process and redirect to the original URL.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Password-Protected URL?</h3>
					<ul>
						<li>
							Secured with Hash and Salt and only accessible by a
							password, ERL makes it so that only people that you
							authorize can access the ERLs.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Safe-and-Secure</h3>
					<ul>
						<li>
							No ads, trackers, nor even cookies, your transaction
							is completely anonymous and undiscernible.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Free and Unlimited</h3>
					<ul>
						<li>
							Using MongoDB&apos;s generous service, we can safely
							store <i>humongous</i> quantities of ERL&apos;s
							while providing the service for free.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Fast and Reliable</h3>
					<ul>
						<li>
							MyERL does not lax on speed and reliability and
							therefore is programmed to provide seamless service
							to the very best of our capabilities.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Maintained and Up-to-Date</h3>
					<ul>
						<li>
							For a site with a simplistic purpose, MyERL is built
							with modern technologies that enhances the quality
							of service that we provide.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Modern and Simple</h3>
					<ul>
						<li>
							MyERL offers a minimal yet responsive and elegant
							interface for the simple yet critical task of
							securely encrypting and shortening your URL.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Available Everywhere</h3>
					<ul>
						<li>
							MyERL microservice is a{" "}
							<i>Progressive Web Application</i> and therefore
							available for service on the Web, Android, IOS and
							even Desktop.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Open API for Developers</h3>
					<ul>
						<li>
							Through exposed APIs, MyERL is available for service
							even without manually visiting. Refer to the API
							section.
						</li>
					</ul>
				</div>
				<div className={styles.itemWhyChoose}>
					<h3>Trusted and Open Source</h3>
					<ul>
						<li>
							Don&apos;t trust us yet? Get a full glimpse at the
							codes that power the service&nbsp;
							<a
								href="https://github.com/alphacoma18/myerl-microservice.git"
								title="Navigate to MyERL public GitHub Repository"
								aria-label="Navigate to MyERL public GitHub Repository"
							>
								publicly available at GitHub
							</a>
							.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default WhyChoose;
