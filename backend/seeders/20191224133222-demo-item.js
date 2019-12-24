"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "item",
      [
        {
          itemCode: "k001",
          itemName: "cookwere pan 28cm. cookie m-123",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemCode: "k002",
          itemName: "cookwere pan 29cm. cookie m-124",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemCode: "k003",
          itemName: "cookwere pan 30cm. cookie m-125",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("item", null, {});
  }
};
