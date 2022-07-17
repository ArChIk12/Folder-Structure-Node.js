// the main app
const { databaseConnection } = require("./database");
const express_app = require("./express-app");
////////////////////////////////////////
const start = async () => {
  await databaseConnection();
  express_app();
};
start();
