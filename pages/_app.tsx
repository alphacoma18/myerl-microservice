import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../public/fontello-77b449b8/css/fontello.css";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					name="author"
					content="Alpha Romer Coma, alphacoma18@gmail.com"
				/>
				<meta name="reply-to" content="alphacoma18@gmail.com" />
				<meta name="designer" content="Alpha Romer Coma" />
				<meta name="publisher" content="Alpha Romer Coma" />
				<meta name="owner" content="Alpha Romer Coma" />
				<meta name="target" content="all" />
				<meta name="copyright" content="Alpha Romer Coma" />
				<title>MyERL | URL Encryption Microservice</title>
				<meta
					name="description"
					content="MyERL microservice provides unlimited yet secure URL encrypting and shortening service."
				/>
				<meta name="url" content="https://myerl.vercel.app" />
				<meta
					name="keywords"
					content="URL shortener, URL, ERL, encrypted, secure, free"
				/>
				<meta name="Classification" content="Microservice" />
				<meta name="language" content="EN" />
				<meta name="coverage" content="Worldwide" />
				<meta name="distribution" content="Global" />
				<meta name="rating" content="General" />
				<meta name="subject" content="Encrypted URL Shortener" />
				<meta name="topic" content="Encrypted URL Shortener" />
				<meta
					name="abstract"
					content="MyERL microservice provides free and unlimited yet secure URL encrypting and shortening service."
				/>

				{/* Robot Meta Tags */}
				<meta name="robots" content="all" />
				<meta name="Googlebot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Baiduspider" content="all" />
				<meta name="YandexBot" content="all" />
				<meta name="revisit-after" content="2 days" />

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="MyERL | URL Encryption Microservice"
				/>
				<meta
					property="og:description"
					content="MyERL microservice provides free and unlimited yet secure URL encrypting and shortening service."
				/>
				<meta property="og:url" content="https://myerl.vercel.app" />
				<meta
					property="og:site_name"
					content="MyERL | URL Encryption Microservice"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://myerl.vercel.app/logo/index_dark_2.png"
				/>
				<meta property="og:image:type" content="image/jpg" />
				<meta
					property="og:image:alt"
					content="Logo of MyERL Encryption Microservice"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:locale" content="en_US" />
				<meta name="og:country-name" content="Philippines" />
				<meta property="og:email" content="alphacoma18@gmail.com" />
				<meta property="og:locale:alternative" content="ja_JP" />

				{/* Twitter Meta Tags */}
				<meta
					property="twitter:title"
					content="MyERL | URL Encryption Microservice"
				/>
				<meta
					property="twitter:description"
					content="MyERL microservice provides free and unlimited yet secure URL encrypting and shortening service."
				/>
				<meta
					property="twitter:url"
					content="https://myerl.vercel.app"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:app:country" content="EN" />
				<meta
					name="twitter:image"
					content="https://myerl.vercel.app/logo/index_dark_2.png"
				/>
				<meta name="twitter:image:type" content="image/jpg" />
				<meta
					name="twitter:image:alt"
					content="Logo of MyERL Encryption Microservice"
				/>
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="630" />
				<meta name="twitter:site" content="@senodesuzo" />
				<meta name="twitter:creator" content="@senodesuzo" />
				<link rel="canonical" href="https://myerl.vercel.app" />
				{/* Icons and browser stuff */}
				<meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="MyERL" />
				<meta name="apple-touch-fullscreen" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="#1a2632"
				/>

				<meta name="application-name" content="MyERL" />
				<meta name="msapplication-TileColor" content="#1a2632" />
				<meta name="msapplication-navbutton-color" content="#1a2632" />
				<meta
					name="msapplication-TileImage"
					content="/mstile-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				<meta name="format-detection" content="telephone=no" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					crossOrigin="use-credentials"
					href="/manifest.webmanifest"
				/>
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#1a2632"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
