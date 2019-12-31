module.exports = (app, db) => {
  app.get("/rackLog", async (req, res) => {
    db.rackLog
      .findAll({
        order: [["rackLog_id", "DESC"]],
        include: [
          { model: db.item },
          { model: db.customer },
          { model: db.group }
        ]
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.post("/create-rackLog", (req, res) => {
    let currentStock = db.stock.findOne({
      where: { item_id: req.body.item_id }
    });
    db.rackLog.create({
      export: req.body.export,
      import: req.body.import,
      balance: currentStock.balance + req.body.import - req.body.export,
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
