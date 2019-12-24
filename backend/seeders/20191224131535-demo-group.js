"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "group",
      [
        {
          month: 1,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 2,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 3,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 4,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 5,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 6,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 7,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 8,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 9,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 10,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 11,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 12,
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          month: 1,
          year: 2020,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("group", null, {});
  }
};
