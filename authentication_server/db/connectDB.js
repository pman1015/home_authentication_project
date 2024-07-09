import { config } from 'dotenv';
import mysql from 'mysql2/promise';

config();
console.log(process.env.DB_HOST);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_NAME);
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
});

export async function query(sql, params) {
  const [result] = await pool.query(sql, params);

  return result;
}
