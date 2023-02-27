const model = require("../models/loginModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashcode) {
    if (err) {
      res.json({ message: "eror", status: 400 });
    }
    let user = new model({
      name: req.body.name,
      email: req.body.email,
      password: hashcode,
    });
    user
      .save()
      .then((response) => {
        res.json({ message: "add success", response });
      })
      .catch((error) => {
        console.log(error, "............");
        res.json({ message: "error" });
      });
  });
};

const login = async (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;
  await model
    .findOne({ email: email })
    .then((result) => {
      console.log(result, " ---------------resultpassword");
      if (result) {
        bcrypt.compare(password, result.password, function (error, response) {
          if (error) {
            res.json({ message: "error compare", status: 400 });
          } else if (response) {
            console.log(result, " ---------------resultpassword1");

            console.log(response, "..........................bcrypt");
            token = jwt.sign({ name: result.name, mail: result.email }, "secretValue", {
              expiresIn: "5m",
            });
            console.log(token, 'token');
            res.json({ message: "login success",
             status: 200,
             result, 
             token });
          
           
          } else {
            res.json({ status: 401, message: "password id not valid" });
          }
        });
      } else {
        res.json({ status: 400, message: "not valid email,password" });
      }
    })
    .catch((err) => {
      res.json({ message:"error" });
    });
};

const forGotPassword = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  bcrypt.hash(password, 10, function (err, hash) {
    if (err) {
      res.json({ message: "eror-------------------------------------" });
    }
    console.log(hash, "........");
    let user = {
      password: hash,
    };
    console.log(email);
    console.log(user.password, "...........................userpassword");

    console.log(hash, "---------------------------------------------find");
    model
      .updateOne({ email }, { $set: { password: user.password } })
      .then((response) => {
        res.json({ message: "sucess update password", response });
        console.log(response, "===============================response");
      })
      .catch((error) => {
        res.json({ message: "error================================" });
      });
  });
};
module.exports = { register, login, forGotPassword };
