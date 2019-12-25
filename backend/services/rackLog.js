module.exports = (app, db) => {
  app.get("/rackLog", (req, res) => {
    db.rackLog
      .findAll({
        order: [["stock_id", "DESC"]]
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.post("/create-stock", (req, res) => {
    db.rackLog.create({
      export: req.body.export,
      import: req.body.import,
      balance: req.body.balance,
      documentNo: req.body.documentNo,
      item_id: req.body.item_id,
      customer_id: req.body.customer_id,
      group_id: req.body.group_id
        .then(result => {
          res.status(200).json(result);
        })
        .catch(error => {
          console.error(error);
          res.status(400).json({ message: error.message });
        })
    });
  });
};
