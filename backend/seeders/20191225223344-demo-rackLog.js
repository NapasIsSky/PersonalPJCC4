"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "rackLog",
      [
        {
          export: 0,
          import: 5000,
          balance: 5000,
          documentNo: "INV-12012019",
          item_id: 1,
          customer_id: "1",
          group_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          export: 5000,
          import: 0,
          balance: 0,
          documentNo: "INV-16012019",
          item_id: 1,
          customer_id: "3",
          group_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          export: 0,
          import: 5000,
          balance: 5000,
          documentNo: "INV-12122019",
          item_id: 1,
          customer_id: "3",
          group_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          export: 0,
          import: 5000,
          balance: 5000,
          documentNo: "INV-12122019",
          createdAt: new Date(),
          updatedAt: new Date(),
          customer_id: "3",
          group_id: 12,
          item_id: 2
        },
        {
          export: 300,
          import: 0,
          balance: 4700,
          documentNo: "P.O.1312201911",
          createdAt: new Date(),
          updatedAt: new Date(),
          customer_id: "1",
          group_id: 12,
          item_id: 1
        },
        {
          export: 0,
          import: 5000,
          balance: 5000,
          documentNo: "INV-12122019",
          createdAt: new Date(),
          updatedAt: new Date(),
          customer_id: "3",
          group_id: 12,
          item_id: 3
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("rackLog", null, {});
  }
};
