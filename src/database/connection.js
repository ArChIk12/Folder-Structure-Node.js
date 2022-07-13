// db connection
const mongoose = require("mongoose");
const { DB_URI } = require("../config");

module.exports = async () => {
  mongoose.connect(DB_URI);
  const dbConnection = mongoose.connection;
  dbConnection.once("open", () => console.log("MongoDB connection done !!"));
  dbConnection.on("error", (err) => console.log(`Connection ${err}`));
};
