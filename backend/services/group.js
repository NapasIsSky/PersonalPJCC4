module.exports = (app, db) => {
  app.get("/group", (req, res) => {
    db.group
      .findAll({
        
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.post("/create-group", (req, res) => {
    db.group
      .create({
        month: req.body.month,
        year: req.body.year
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
  });

  app.delete("/remove-group/:id", (req, res) => {
    db.group
      .destroy({ where: { id: req.prams.id } })
      .then(result => {
        res.status(204).json();
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.put("/update-group/:id", (req, res) => {
    db.group
      .update(
        {
          month: req.body.month,
          year: req.body.year
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
