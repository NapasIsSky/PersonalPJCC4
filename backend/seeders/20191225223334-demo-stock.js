"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stock",
      [
        {
          itemCode: "k001",
          itemName: "cookwere pan 28cm. cookie m-123",
          balance: 4700,
          item_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemCode: "k002",
          itemName: "cookwere pan 30cm. cookie m-124",
          balance: 5000,
          item_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemCode: "k003",
          itemName: "cookwere pan 30cm. cookie m-125",
          balance: 5000,
          item_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stock", null, {});
  }
};
