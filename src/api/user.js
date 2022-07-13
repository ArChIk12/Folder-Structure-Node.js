// end points
const userServices = require("../services/User-Services");
module.exports = (app) => {
  app.post("/user/register", async (req, res) => {
    const services = new userServices();
    const user = await services.SignUp(req.body.data);
    res.status(200).json(user);
  });
  //LOG IN user
  app.post("/user/login", async (req, res) => {
    const services = new userServices();
    //the data we gnna use forr the token
    const data = services.SignIn(req.body.data);
    if (data) {
      res.status(200).json(data);
      return;
    }
    res.status(400).json({ data: "sth went wrong" });
  });
  //get user infos
  app.post("/user/getUser", async (req, res) => {
    res.json({ heool: "sdsddsd" });
    const services = new userServices();
    const data = services.GetUser(req.body.data);
    if (data) {
      res.status(200).json(data);
      return;
    }
    res.status(400).json({ data: "sth went wrong" });
  });
  //get followers namaes
  app.post("/user/getFollowers", async (req, res) => {
    const services = new userServices();
    const data = services.GetFollowers(req.body.data);
    if (data) {
      res.status(200).json(data);
      return;
    }
    res.status(400).json({ data: "sth went wrong" });
  });
};
