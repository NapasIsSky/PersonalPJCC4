module.exports = (sequelize, DataType) => {
    const group = sequelize.define('group',{
        group_id:{
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        month: {
            type: DataType.INTEGER(11)
        },
        year:{
          type: DataType.INTEGER(11)
        }
        },
    {
        freezeTableName: true,
        timesstamps: false,
    })
    group.associate = (models) => {
        // associations can be defined here
        group.hasMany(models.rackLog, { foreignKey:{name:'group_id'}})
      };
    return group  
}