"use ";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user",
      [
        {
          username: "manager",
          password: "$2a$12$8dPz7Iv3Cl7AtUBtLzMeZOqCQR2ZyiHi.wi7VIprhhcrYjBD07P3W",
          firstname: "Mr.Manager",
          lastname: "Mamameya",
          email: "mamameya.mana@gmail.com",
          tel: 0843356677,
          role: "manager",
          createdAt: new Date(),
          updatedAt: new Date(),
          address_id:1
        },
        {
          username: "staff1",
          password: "$2a$12$sdzt5LCV0rYli0PXy3L0RuP/q56bLOLsqUA2/M6Dn/Xr0ZXvdlnmq",
          firstname: "Mr.M",
          lastname: "S",
          email: "M.S@gmail.com",
          tel: 0843355566,
          role: "staff",
          createdAt: new Date(),
          updatedAt: new Date(),
          address_id:2
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  }
};
