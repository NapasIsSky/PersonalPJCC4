module.exports = (sequelize, DataType) => {
    const rackLog = sequelize.define('rackLog',{
        rackLog_id:{
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
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
        docmentNo:{
            type: DataType.STRING(20)
        }    
    },
    {
        freezeTableName: false,
        timesstamps: true,
    })
    rackLog.associate = function (models){ 
        // associations can be defined here
        rackLog.hasMany(models.item, { foreignKey: 'item_id' })
      };
    return rackLog  
}