//const express = require('express')
// if change to import statement
// package.json - edit-> type to module

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./Router/route.js";

const app = express();

// app middlewares

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// application port
const port = process.env.PORT || 8080;

// routes

app.use('/api',router) //apis

app.get("/", (req, res) => {
  try {
    res.json("Get Requset");
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`sever connected http://localhost:${port}`);
});
