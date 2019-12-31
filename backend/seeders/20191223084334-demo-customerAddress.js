"use ";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customerAddress",
      [
        {
          no: 000,
          road: "import",
          province: "import",
          city: "import",
          country: "import",
          postcode: 00000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          no: 333,
          road: "BANGNA",
          province: "BANGPHLI",
          city: "SAMUTPAKRAN",
          country: "THAILAND",
          postcode: 15040,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          no: 123,
          road: "BANG",
          province: "BANG",
          city: "SAMUT",
          country: "THAILAND",
          postcode: 21233,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          no: 333,
          road: "YYY",
          province: "ZZZ",
          city: "SSS",
          country: "THAILAND",
          postcode: 15040,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customerAddress", null, {});
  }
};