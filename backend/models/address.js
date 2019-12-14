module.exports = (sequelize, DataType) => {
    const address = sequelize.define('address',{
        address_id:{
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        no: {
            type: DataType.INTEGER(11)
        },
        village:{
          type: DataType.STRING(100)
        },
        road:{
            type: DataType.STRING(100)
        },
        province:{
          type:DataType.STRING(100)
        },
        city:{
          type:DataType.STRING(100)
        },
        country:{
          type:DataType.STRING(100)
        },
        postcode:{
          type:DataType.INTEGER(6)
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
    return address  
}