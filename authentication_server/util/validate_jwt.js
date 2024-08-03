import {config} from "dotenv";
import jwt from "jsonwebtoken";

export default async function validateJWT(token) {
	config();
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		return decoded;
	} catch (err) {
		return null;
	}
}
