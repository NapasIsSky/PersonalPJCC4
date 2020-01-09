const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config/passport/passport");
const bcrypt = require("bcryptjs");
module.exports = (app, db) => {
  app.post("/register",
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
      passport.authenticate("register", (err, user, info) => {
        if (err) {
          console.error(err);
          res.status(400).send({ message: err })
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
        } else {
          console.log(">>>>>>>>>>>>>>>", req.user.role)
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
                    role: "staff",
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
            res.status(401).send("Unauthorized777");
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
              { id: user.user_id, username: user.username, role: user.role },
              config.jwtOptions.secretOrKey,
              { expiresIn: 3600 }
            );
            res.status(200).send({
              auth: true,
              token,
              message: "user found & logged in",
              role: user.role
            });
          });
      }
    })(req, res, next);
  });

  app.get("/userInfo", (req, res, next) => {
    db.user
      .findAll({
        order: [["user_id", "DESC"]],
        include: [{ model: db.address }]
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });
};
