const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(8080, () => {
  console.log("server is running on port: 8080!");
});
