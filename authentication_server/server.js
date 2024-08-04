import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authentication_router from "./routes/authentication_router.js";
dotenv.config();

const app = express();

const domain = process.env.CORS_DOMAIN;
const regex = new RegExp(`http.*:\/\/.*${domain}`);
const local_regex = new RegExp(`http:\/\/localhost.*`);

console.log(`Domain: ${domain} Regex: ${regex}`);
app.use(
	cors({
		origin: function (origin, callback) {
			console.log(origin);
			if (origin === undefined) {
				callback(null, true);
			} else if (origin.match(regex) || origin.match(local_regex)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
			{
			}
		},
	})
);
app.use(authentication_router);

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is listening on port 3000");
});
