import Cryptr from "cryptr";
const cryptr = new Cryptr(`${process.env.SALT_SECRET}`);
function encrypt(url: string): string {
	const encryptedURL = cryptr.encrypt(url);
	return encryptedURL;
}
export default encrypt;
