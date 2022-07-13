// the main app
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { user } = require("./api");
const { databaseConnection } = require("./database");
////////////////////////////////////////
const start = async () => {
  const app = express();
  app.use(morgan("combined"));
  app.use(bodyParser.json());
  app.use(cors({ origin: "*" }));
  await databaseConnection();
  user(app);
  const port = process.env.PORT || 8070;
  //listening to the port 8081
  app.listen(port, () => {
    console.log(`server running on port : ${port}`);
  });
};
start();
