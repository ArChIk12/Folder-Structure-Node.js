const dotenv = require("dotenv").config();
module.exports = {
  DB_URI: process.env.MONGODB_URI,
  JWT_SE: process.env.JWT_SERET,
};
