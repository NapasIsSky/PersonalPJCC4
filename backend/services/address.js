module.exports = (app, db) => {
  app.get("/userAddress", (req, res) => {
    db.address
      .findAll({
        order: [["id", "DESC"]]
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.post("/create-userAddress", (req, res) => {
    db.address
      .create({
        no: req.body.no,
        village: req.body.village,
        road: req.body.road,
        province: req.body.province,
        city: req.body.city,
        country: req.body.country,
        postcode: req.body.postcode
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
  });

  app.put("/update-userAddress/:id", (req, res) => {
    db.address
      .update(
        {
          no: req.body.no,
          village: req.body.village,
          road: req.body.road,
          province: req.body.province,
          city: req.body.city,
          country: req.body.country,
          postcode: req.body.postcode
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
