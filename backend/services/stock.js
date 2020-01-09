const passport = require("passport");

module.exports = (app, db) => {
  app.get("/stock", (req, res) => {
    db.stock
      .findAll({
        order: [["stock_id", "DESC"]],
        include: [{ model: db.item }]
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.post("/create-stock",
    passport.authenticate('jwt', { session: false }),
   (req, res) => {
    console.log(req.body)
    db.stock
      .create({
        itemCode: req.body.itemCode,
        item_id: req.body.item_id,
        itemName: req.body.itemName,
        balance: req.body.balance,
        user_id: req.user.user_id
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
  });

  app.put("/update-stock/:item_id", (req, res) => {
    let currentRackLog = db.rackLog.findAll({
      where: {
        item_id: req.params.item_id,
      }
    });
    db.stock
      .update(
        {
          balance: currentRackLog.import - currentRackLog.export
        }
      )
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });
};
