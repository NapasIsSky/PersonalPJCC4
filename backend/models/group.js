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
    // user.associate = function (models) {
    //     // associations can be defined here
    //     user.hasMany(models.user, { foreignKey: 'address_id' })
    //   };
    return group  
}