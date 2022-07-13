// main functions regroups everything from utils to user repo
const { GeneratePassword } = require("../utils");
const { ValidatePassword } = require("../utils");
const { ValidateToken } = require("../utils");
const { GenerateSalt } = require("../utils");
const { userRepo } = require("../database");
const { CreateToken } = require("../utils");
module.exports = function userServices() {
  this.repo = new userRepo();
  this.SignIn = async function ({ username: name, password }) {
    const user = await this.repo.FindUserByName(name);
    if (user) {
      if (await ValidatePassword(password, user.password)) {
        return await CreateToken(user._id, user.name);
      }
      return false;
    }
    return false;
  };
  this.SignUp = async function ({ UserName: name, Email: email, Password }) {
    const salt = GenerateSalt();
    const password = await GeneratePassword(Password, salt);
    const user = await this.repo.CreateUser({ name, email, password });
    return user;
  };
  this.GetUser = async function ({ token }) {
    console.log(token);
    const { id } = await ValidateToken(token);
    const user = this.repo.FindUserById(id);
    return user || false;
  };
  this.GetFollowers = async function ({ ids }) {
    const followers = await this.repo.GetFollowers(ids);
    return followers || [];
  };
};
