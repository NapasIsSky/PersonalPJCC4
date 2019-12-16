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
    rackMap.associate = (models) => { 
        // associations can be defined here
        rackMap.belongsTo(models.stock,{foreignKey:{name:'stock_id'}})
      };
    return rackMap  
}