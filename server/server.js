import express from "express";
require("dotenv").config();
import cors from "cors";
const bodyParser = require("body-parser");

import initRoutes from "./src/routes";
import connectDatabase from "./src/config/connectDatabase";

const app = express();
const port = process.env.PORT || 8000;

initRoutes(app);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    method: ["POST", "PUT", "GET", "DELETE"],
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello World");
});

connectDatabase();

const listener = app.listen(port, () => {
  console.log(`Server is running on port ${listener.address().port}`);
});
