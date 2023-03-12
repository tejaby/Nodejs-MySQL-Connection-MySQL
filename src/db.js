import mysql2 from "mysql2/promise";
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } from "./config.js";

export const connectDB = async () => {
  const connection = await mysql2.createConnection({
    user: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
  });
  return connection;
};
