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

  app.post("/create-stock", (req, res) => {
    db.stock
      .create({
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        balance: req.body.balance
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
  });

  app.put("/update-stock/:id", (req, res) => {
    let currentRackLog = db.rackLog.findAll({
      where: {
        item_id: req.body.item_id,
        import: req.body.import,
        export: req.body.export
      }
    });
    db.stock
      .update(
        {
          stock_id: req.body.stock_id,
          itemCode: req.body.itemCode,
          itemName: req.body.itemName,
          balance:
            req.body.balance + currentStock.import - currentRackLog.export
        },
        { where: { id: req.params.id } }
      )
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });
};
