import dotenv from 'dotenv';
import express from 'express';
import authentication_router from './routes/authentication_router.js';
dotenv.config();


const app = express();

app.use(authentication_router);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port 3000');
});
