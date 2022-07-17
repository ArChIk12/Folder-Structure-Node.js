const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { user } = require("./api");
const port = process.env.PORT || 8070;
const app = express();
module.exports = async () => {
  app.use(morgan("combined"));
  app.use(bodyParser.json());
  app.use(cors({ origin: "*" }));
  user(app);
  app.listen(port, () => {
    console.log(`server running on port : ${port}`);
  });
};
