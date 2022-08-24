/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";
const nextConfig = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: "public",
		disable: prod ? false : true,
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
});

module.exports = nextConfig;
