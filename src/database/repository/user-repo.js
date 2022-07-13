// here we write all the funcions that involves customer and functions
// that contact with db directly
const { User } = require("../models");
module.exports = function () {
  this.CreateUser = async (payload) => {
    const { name, email, password } = payload;
    const newUser = new User({
      name,
      email,
      password,
      followers: [],
      followings: [],
    });
    // save user to the db
    const user = await newUser.save();
    return user;
  };

  this.FindUserById = async (id) => {
    const user = await User.findOne({ _id: id }).lean();
    return user;
  };

  this.GetFollowers = async (ids) => {
    let followers = [];
    for (id in ids) {
      const user = await this.FindUserById(id);
      const { name, _id: id } = user;
      followers.push({ name, id });
    }
    return followers;
  };
  this.FindUserByName = async (name) => {
    return await UserSchema.findOne({ name }).lean();
  };
};
