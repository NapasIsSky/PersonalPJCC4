"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "address",
      [
        {
          no: 333,
          village: "KITTIYA",
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
          village: "KITTI",
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
          village: "XXX",
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
    return queryInterface.bulkDelete("address", null, {});
  }
};
