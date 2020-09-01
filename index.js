const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const router = require("./app/router");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccesStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

app.options("*", cors());

app.use("/public", express.static("public"));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} ...`);
});
