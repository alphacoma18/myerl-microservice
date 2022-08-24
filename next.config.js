/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
	dest: "public",
	disable: process.env.NODE_ENV === "development",
	register: true,
	scope: "/app",
	sw: "service-worker.js",
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	reactStrictMode: true,
	swcMinify: true,
});

module.exports = withPWA({});
