"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "rackMap",
      [
        {
          rackMap_id: "010101",
          x: "01",
          y: "01",
          z: "01",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("rackMap", null, {});
  }
};
