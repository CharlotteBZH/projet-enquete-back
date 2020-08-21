const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = require('./app/router');
const cors = require('cors');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5050;
const app = express();


//app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(router);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT} ...`);
});