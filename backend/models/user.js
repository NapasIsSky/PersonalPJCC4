module.exports = (sequelize, DataType) => {
    const user = sequelize.define('user',{
        user_id:{
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        firstname:{
            type: DataType.STRING(100)
        },
        lastname:{
            type: DataType.STRING(100)
        },
        email:{
            type: DataType.STRING(100)
        },
        address:{
            type: DataType.STRING(500)
            // no: DataType.INTEGER(11),
            // street: DataType.STRING(100),
            // province: DataType.STRING(100),
            // city: DataType.STRING(100),
            // country: DataType.STRING(100),
            // postcode: DataType.STRING(100)
        },
        tel: DataType.INTEGER(11)   
    },
    {
        freezeTableName: true,
        timesstamps: true,
    })
    user.associate = function (models) {
        // associations can be defined here
        // user.hasMany(models.stock, { foreignKey: 'user_id' })
    //   };
    return user  
}