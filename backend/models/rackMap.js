module.exports = (sequelize, DataType) => {
    const rackMap = sequelize.define('rackMap',{
        rackMap_id:{
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        x:{
            type: DataType.INTEGER(3)
        },
        y:{
            type: DataType.INTEGER(3)
        },
        z:{
            type: DataType.INTEGER(3)
        }
    },
    {
        freezeTableName: true,
        timesstamps: false,
    })
    rackMap.associate = function (models){ 
        // associations can be defined here
        rackMap.hasMany(models.stock, { foreignKey: 'stock_id' })
      };
    return rackMap  
}