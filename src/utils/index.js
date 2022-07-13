// additional function helps with process
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SE } = require("../config");
// BCRYPT
module.exports.GenerateSalt = async () => {
  return await bcrypt.genSalt();
};
module.exports.GeneratePassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};
module.exports.ValidatePassword = async (EnteredPass, SavedPass) => {
  return await bcrypt.compare(EnteredPass, SavedPass);
};
// JWT
module.exports.CreateToken = async (id, name) => {
  return jwt.sign({ id, username: name }, JWT_SE);
};
module.exports.ValidateToken = async (req) => {
  const { token } = req.body.data;
  const decoded = jwt.verify(token, JWT_secret);
  const { id } = decoded;
  return { id: id || false };
};
