module.exports = (app, db) => {
    app.get("/customerAddress", (req, res) => {
      db.customerAddress
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
  
    app.post("/create-customerAddress", (req, res) => {
      db.customerAddress
        .create({
          no: req.body.no,
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
  
    app.put("/update-customerAddress/:id", (req, res) => {
      db.customerAddress
        .update(
          {
            no: req.body.no,
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
  