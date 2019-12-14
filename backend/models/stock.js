module.exports = (sequelize, DataType) => {
    const stock = sequelize.define('stock',{
        stock_id:{
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        id_item:{
            type: DataType.STRING(100)
        },
        name_item:{
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
    user.associate = function (models){ 
        // associations can be defined here
        user.hasMany(models.address, { foreignKey: 'address_id' })
      };
    return user  
}