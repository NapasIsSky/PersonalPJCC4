module.exports = (app, db) => {
    app.get('/userAddress', (req, res) => {
      db.address.findAll({
            order: [
              ['id', 'DESC'],
            ],
          })
            .then(result => {
              res.status(200).json(result)
            })
            .catch(error => {
              res.status(400).json({ message: error.message })
            })
        })
  
    app.post("/create-userAddress", (req, res) => {
      db.address.create({
          rackMap_id: req.body.rackMap_id,
          x: req.body.x,
          y: req.body.y,
          z: req.body.z
        })
        .then(result => {
          res.status(200).json(result);
        })
        .catch(error => {
          console.error(error);
          res.status(400).json({ message: error.message });
        });
    });
  
    app.delete("/remove-userAddress/:id", (req, res) => {
        db.address.destroy({ where: {id: req.prams.id}})
        .then(result => {
            res.status(204).json()
        })
        .catch(error =>{
            res.status(400).json({message: error.message})
        })
    })
    app.put('/update-userAddress/:id', (req, res) => {
      db.address.update({
          rackMap_id: req.body.rackMap_id,
          x: req.body.x,
          y: req.body.y,
          z: req.body.z
        }, { where: { id: req.params.id }})
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })
  };
  
  