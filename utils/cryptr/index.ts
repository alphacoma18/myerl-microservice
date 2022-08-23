import Cryptr from "cryptr";
const cryptr = new Cryptr(`${process.env.SALT_SECRET}`);
function encrypt(url: string): string {
	const encryptedURL = cryptr.encrypt(url);
	return encryptedURL;
}
function decrypt(url: string): string {
	const decryptedURL = cryptr.decrypt(url);
	return decryptedURL;
}
export { encrypt, decrypt };
