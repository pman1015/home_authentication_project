import {config} from "dotenv";
import jwt from "jsonwebtoken";

export default async function validateJWT(token) {
	config();
	try {
		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET,
			function (err, decoded) {
				if (err) {
					return null;
				} else {
					return decoded;
				}
			}
		);
		return decoded;
	} catch (err) {
		return null;
	}
}
