const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const session = require('express-session');
const router = require('./app/router');
const cors = require('cors');
const bodyParser = require('body-parser');

const userMiddleware = require('./app/middlewares/user');

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

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(userMiddleware);

app.use(router);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT} ...`);
});
