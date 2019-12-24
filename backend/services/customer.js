module.exports = (app, db) => {
  app.get("/customer", (req, res) => {
    db.customer
      .findAll({})
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });

  app.post("/create-customer", (req, res) => {
    console.log(req.body.customerMaketingContact);
    db.customer
      .create({
        customerName: req.body.customerName,
        customerTel: req.body.customerTel,
        customerEmail: req.body.customerEmail,
        customerMaketingName: req.body.customerMaketingName,
        customerMaketingContact: req.body.customerMaketingContact,
        customerAddress_id: req.body.customerAddress_id
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ message: error.message });
      });
  });

  app.put("/update-customer/:id", (req, res) => {
    db.customer
      .update(
        {
          customerName: req.body.customerName,
          customerTel: req.body.customerTel,
          customerEmail: req.body.customerEmail,
          customerMaketingName: req.body.customerMaketingName,
          customerMaketingContact: req.body.customerMaketingContact,
          customerAddress_id: req.body.customerAddress_id
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

  app.delete("/remove-customer/:id", (req, res) => {
    db.customer
      .destroy({ where: { id: req.prams.id } })
      .then(result => {
        res.status(204).json();
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  });
};
