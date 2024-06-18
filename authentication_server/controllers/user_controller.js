import { createHmac } from "crypto";
import { query } from "../db/connectDB.js";
import user from "../models/user_model.js";


export async function createUser(req, res) {
    const newUser = new user(req.body);

    newUser.salt = Math.random().toString(36).substring(7);

    if(typeof(newUser.password) === "undefined"){
        res.status(400);
        res.send("Bad Request password is required!");
        return;
    }

    const hmac = createHmac("sha256", newUser.salt).update(newUser.password)
    newUser.password = hmac.digest("hex");

    if(typeof(newUser.email) === "undefined"){
        res.status(400);
        res.send("Bad Request email is required!");
        return;
    }
    
    const result = await query("INSERT INTO users (username, password, email, salt) VALUES (?, ?, ?, ?)", [newUser.username, newUser.password, newUser.email, newUser.salt])
    if(result.affectedRows === 0){
        res.status(500);
        return;
    }else{
        if(result.affectedRows === 1){
            res.status(200);
        }
    }
    return result;
}
export async function lookUpUserbyEmail(req, res){
    const email = req.email;

    if(typeof(email) === "undefined"){
        res.status(400);
        return null;
    }

    const result = await query("SELECT * FROM users WHERE email = ?", [email])
    console.log("getUser: " + result + result.length);
    if(result.length < 1 ){
        res.status(404);
        return;
    }

    const newUser = new user(result[0]);
    return newUser;
}

export async function getUser(req, res) {
    const username = req.username;

    if(typeof(username) === "undefined"){
        res.status(400);
        return null;
    }

    const result = await query("SELECT * FROM users WHERE username = ?", [username])
    console.log("getUser: " + result + result.length);
    if(result.length < 1 ){
        res.status(404);
        return;
    }

    const newUser = new user(result[0]);
    return newUser;
}
export async function validatePassword(req, res, user){
    const hmac = createHmac("sha256", user.salt).update(req.password);
    const providedPassword = hmac.digest("hex");
    if(providedPassword === user.password){
        res.send(user.getJWT());

    }else{
        res.status(401);
        res.send("Unauthorized");
    }
}
