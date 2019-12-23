module.exports = (app, db) => {
  app.get('/rackMap', (req, res) => {
    db.rackMap.findAll({
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

  app.post("/create-rack-no", (req, res) => {
    const x = req.body.x
    const y = req.body.y
    const z = req.body.z
    db.rackMap.create({
        rackMap_id: `${x}${y}${z}`,
        x,
        y,
        z
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
  });

  app.delete("/remove-rack-no/:id", (req, res) => {
      db.rackMap.destroy({ where: {id: req.prams.id}})
      .then(result => {
          res.status(204).json()
      })
      .catch(error =>{
          res.status(400).json({message: error.message})
      })
  })
  app.put('/update-rack-no/:id', (req, res) => {
    db.rackMap.update({
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

