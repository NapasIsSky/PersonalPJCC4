module.exports = (sequelize, DataType) => {
    const rackMap = sequelize.define('rackMap',{
        rackMap_id:{
            type: DataType.STRING(7)
        },
        x:{
            type: DataType.STRING(3)
        },
        y:{
            type: DataType.STRING(3)
        },
        z:{
            type: DataType.STRING(3)
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