module.exports = (sequelize, DataType) => {
  const item = sequelize.define('item',{
    item_id:{
          type: DataType.UUID,
          defaultValue: DataType.UUIDV4,
          allowNull: false,
          primaryKey: true,
          unique: true
      },
      itemCode: {
          type: DataType.STRING(20)
      },
      itemName:{
        type: DataType.STRING(200)
      }
      },
  {
      freezeTableName: true,
      timesstamps: false,
  })
  // user.associate = function (models) {
  //     // associations can be defined here
  //     user.hasMany(models.user, { foreignKey: 'address_id' })
  //   };
  return item  
}