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
        freezeTableName: false,
        timesstamps: true,
    })
    stock.associate = function (models){ 
        // associations can be defined here
        stock.hasMany(models.user, { foreignKey: 'user_id' })
      };
    return stock  
}