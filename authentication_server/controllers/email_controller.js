import { config } from 'dotenv';
import { text } from 'express';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

config();

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.REDIRECT_URI
    );
oauth2Client.setCredentials({refresh_token: process.env.GOOGLE_REFRESH_TOKEN});

export async function sendMail(email, jwt){
    try{
        const accessToken = await oauth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                accessToken: accessToken
            }
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset',
            text: `Click the link to reset your password: http://localhost:3000/reset-password/${jwt}`
        };
        const result = await transport.sendMail(mailOptions);
        return result;
    }catch(error){
        return error;
    }
}