module.exports = (sequelize, DataType) => {
    const rackLog = sequelize.define('rackLog',{
        rackLog_id:{
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        export:{
            type: DataType.INTEGER(20)
        },
        import:{
            type: DataType.INTEGER(20)
        },
        balance:{
            type: DataType.INTEGER(20)
        },
        documentNo:{
            type: DataType.STRING(20)
        }    
    },
    {
        freezeTableName: true,
        timesstamps: true,
    })
    rackLog.associate = (models) => { 
        // associations can be defined here
        rackLog.belongsTo(models.item, { foreignKey:{name:'item_id'}})
        rackLog.belongsTo(models.customer,{ foreignKey:{name:'customer_id'}})
        rackLog.belongsTo(models.group,{ foreignKey:{name:'group_id'}})      
      };
    return rackLog  
}