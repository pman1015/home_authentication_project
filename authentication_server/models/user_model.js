import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

class user{
    constructor(json) {
        this.username = json.username;
        this.password = json.password;
        this.email = json.email;
        this.salt = json.salt;
        this.id = json.id;
    }
    getJWT(){
        config();
        const token = jwt.sign({username: this.username, id: this.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return token;
    }

    getResetJWT(){
        config();
        const token = jwt.sign({username: this.username, id: this.id}, process.env.JWT_SECRET + this.password, {expiresIn: '1h'});
        return token;
    }

    
}

export default user;