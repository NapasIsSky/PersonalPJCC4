module.exports = (sequelize, DataType) => {
    const stock = sequelize.define('stock',{
        stock_id:{
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        itemCode:{
            type: DataType.STRING(100)
        },
        itemName:{
            type: DataType.STRING(100)
        },
        balance:{
            type: DataType.STRING(100)
        }
    },
    {
        freezeTableName: true,
        timesstamps: true,
    })
    stock.associate = (models) => { 
        // associations can be defined here
        stock.belongsTo(models.item, {foreignKey:{name:'item_id'}})
        stock.belongsTo(models.user, {foreignKey:{name:'user_id'}})

        stock.hasMany(models.rackMap,{foreignKey:{name:'stock_id'}})
      };
    return stock  
}