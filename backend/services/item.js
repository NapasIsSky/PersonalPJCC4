module.exports = (app, db) => {
  app.get("/item", (req, res) => {
    db.item
      .findAll({})
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.post("/create-item", (req, res) => {
    db.item
      .create({
        itemCode: req.body.itemCode,
        itemName: req.body.itemName
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
  });

  app.delete("/remove-item/:id", (req, res) => {
    db.item
      .destroy({ where: { id: req.prams.id } })
      .then(result => {
        res.status(204).json();
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.put("/update-item/:id", (req, res) => {
    db.item
      .update(
        {
          itemCode: req.body.itemCode,
          itemName: req.body.itemName
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

  app.get("/item/:itemCode", (req, res) => {
    db.item
      .findOne({where: { itemCode: req.params.itemCode }})
      
      .then(result => {
        res.status(200).send({item_id: result.item_id, itemName: result.itemName});
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

};
