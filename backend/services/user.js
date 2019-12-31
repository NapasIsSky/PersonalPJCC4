const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config/passport/passport");
const bcrypt = require("bcryptjs");
module.exports = (app, db) => {
  app.post("/registerUser", (req, res, next) => {
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        if (req.user.role == "manager") {
          db.user
            .findOne({ where: { username: req.body.username } })
            .then(user => {
              console.log(user);
              user
                .update({
                  firstname: req.body.firstname,
                  lastname: req.body.lastname,
                  email: req.body.email,
                  tel: req.body.tel,
                  role: req.body.role,
                  address_id: req.body.address_id
                })
                .then(() => {
                  console.log("user created in db");
                  res.status(200).send({ message: "user created" });
                });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          res.status(401).send("unauthorized");
        }
      }
    })(req, res, next);
  });
  app.post("/loginUser", (req, res, next) => {
    passport.authenticate("login", (err, users, info) => {
      if (err) {
        console.error(`error ${err}`);
      }
      if (info !== undefined) {
        console.error(info.message);
        if (info.message === "bad username") {
          res.status(401).send(info.message);
        } else {
          res.status(403).send(info.message);
        }
      } else {
        db.user
          .findOne({ where: { username: req.body.username } })
          .then(user => {
            const token = jwt.sign(
              { id: user.id, role: user.role },
              config.jwtOptions.secretOrKey,
              { expiresIn: 3600 }
            );
            res.status(200).send({
              auth: true,
              token,
              message: "user found & logged in"
            });
          });
      }
    })(req, res, next);
  });
};
