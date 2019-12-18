module.exports = (sequelize, DataType) => {
    const rackMap = sequelize.define('rackMap',{
        rackMap_id:{
            type: DataType.INTEGER(7)
            
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