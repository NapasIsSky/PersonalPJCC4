"use";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customer",
      [
        {
          customerName: "import",
          customerTel: 0000000,
          customerEmail: "import",
          customerMaketingName: "import",
          customerMaketingContact: "import",
          createdAt: new Date(),
          updatedAt: new Date(),
          customerAddress_id: 1
        },
        {
          customerName: "KiKi Co.,Ltd",
          customerTel: 02733445,
          customerEmail: "kikicompany@gmail.com",
          customerMaketingName: "Vithada Vivi",
          customerMaketingContact: "vithadaza1234@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          customerAddress_id: 2
        },
        {
          customerName: "Zaza Co.,Ltd",
          customerTel: 02334567,
          customerEmail: "zazacompany@gmail.com",
          customerMaketingName: "Vimara Viki",
          customerMaketingContact: "vimara.v@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          customerAddress_id: 3
        },
        {
          customerName: "Vare Co.,Ltd",
          customerTel: 0277766,
          customerEmail: "varecompany@gmail.com",
          customerMaketingName: "Vanthar Vimara",
          customerMaketingContact: "vantharlala@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          customerAddress_id: 4
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customer", null, {});
  }
};
