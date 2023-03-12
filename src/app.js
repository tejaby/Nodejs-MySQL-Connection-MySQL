import express from "express";
import morgan from 'morgan'
import { connectDB } from "./db.js";
import { PORT } from "./config.js";

const app = express();

app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/ping", async (req, res) => {
  const connection = await connectDB();
  const result = await connection.query(`Select "hello world" AS Result`);
  console.log(result[0]);
  res.send("ping");
});

app.get("/create", async (req, res) => {
  const connection = await connectDB();
  const result = await connection.query(
    `INSERT INTO users(name) VALUES("yostintejaby")`
  );
  res.send(result);
});

app.get("/show", async (req, res) => {
  const connection = await connectDB();
  const [row, fields] = await connection.query(`SELECT * FROM users`);
  res.json(row);
});

app.listen(PORT);
