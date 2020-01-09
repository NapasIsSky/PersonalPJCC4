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

  app.get("/rackLogGroup", async (req, res) => {
    db.rackLog
      .findAll({
        include: [
          { model: db.item },
          { model: db.customer },
          { model: db.group }
        ],
        order: [["group_id", "DESC"]]
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

  app.post("/create-import", async (req, res) => {
    //  const {documentNo, import, item_id} = req.body
    try {
      let currentStock = await db.stock.findOne({
        where: { item_id: req.body.item_id }
      });
      
      console.log(".............");
      console.log(req.body);
      console.log(req.body.group_id);
      console.log(".............");
      let balance = Number(currentStock.balance) + Number(req.body.balance)
       db.rackLog
      .create({
        export: 0,
        customer_id: 1,
        import: req.body.import,
        balance: balance,
        documentNo: req.body.documentNo,
        item_id: req.body.item_id,
        group_id: req.body.group_id
      })
      .then(result => {
        res.status(200).json({balance: result.balance});
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
    } catch (err) {
      console.log(err)
    }
    // console.log({
    //       export: 0,
    //       customer_id: 1,
    //       import: req.body.import,
    //       balance: balance,
    //       documentNo: req.body.documentNo,
    //       item_id: req.body.item_id,
    //       group_id: req.body.group_id
    //     })
   
  });

  app.get("/rackLog/:item_id", (req, res) => {
    db.rackLog
      .findOne({ where: { item_id: req.params.item_id } })

      .then(result => {
        res.status(200).send({ balance: result.balance });
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });
  app.post("/create-export", async (req, res) => {
    //  const {documentNo, import, item_id} = req.body
    try {
      let currentStock = await db.stock.findOne({
        where: { item_id: req.body.item_id }
      });
      
      console.log(".............");
      console.log(req.body);
      console.log(req.body.group_id);
      console.log(".............");
      let balance = Number(currentStock.balance) - Number(req.body.balance)
       db.rackLog
      .create({
        import: 0,
        customer_id: req.body.customer_id,
        export: req.body.export,
        balance: balance,
        documentNo: req.body.documentNo,
        item_id: req.body.item_id,
        group_id: req.body.group_id
      })
      .then(result => {
        res.status(200).json({balance: result.balance});
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
    } catch (err) {
      console.log(err)
    };
  });
};
