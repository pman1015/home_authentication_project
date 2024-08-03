import express from "express";
import {sendMail} from "../controllers/email_controller.js";
import * as user_controller from "../controllers/user_controller.js";
import validateJWT from "../util/validate_jwt.js";

const authentication_router = express.Router();
authentication_router.use(express.json());

authentication_router.post("/login", async (req, res) => {
	var user = await user_controller.getUser(req.body, res);
	if (res.statusCode !== 200) {
		res.send("User not found");
		return;
	}

	user_controller.validatePassword(req.body, res, user);
});

authentication_router.get("/resetPassword", async (req, res) => {
	var user = await user_controller.lookUpUserbyEmail(req.body, res);
	if (res.statusCode !== 200) {
		res.send("User not found");
		return;
	}
	const result = await sendMail(user.email, user.getResetJWT());
	console.log(result);
	res.send("Password reset:" + user.getResetJWT());
});
authentication_router.post("/validateJWT", async (req, res) => {
	var jwt = req.body.jwt;
	if (jwt === undefined) {
		res.send("Bad Request: JWT is required");
		return;
	} else {
		const decoded = await validateJWT(jwt);

		if (decoded === null) {
			res.send("Invalid JWT");
		} else {
			res.send("Valid JWT");
		}
	}
});

authentication_router.post("/createUser", async (req, res) => {
	var user = await user_controller.getUser(req.body, res);
	console.log(res.statusCode);

	if (res.statusCode === 400) {
		res.send("Bad Request");
		return;
	}

	if (res.statusCode !== 404) {
		console.log("404");
		res.statusCode = 404;
		res.send("User already exists");
		return;
	}
	await user_controller.createUser(req, res);
	if (res.statusCode === 200) {
		res.send("User created");
	} else {
		res.send("User not created");
		s;
	}
});

authentication_router.post("/resetPassword", async (req, res) => {});

authentication_router.post("/updateUsername", async (req, res) => {});

export default authentication_router;
