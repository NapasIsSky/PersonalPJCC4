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
  item.associate = (models) => {
      // associations can be defined here
      item.hasMany(models.rackLog, { foreignKey: {name:'item_id'}})
      item.hasMany(models.stock, { foreignKey: {name:'item_id'}})
    };
  return item  
}