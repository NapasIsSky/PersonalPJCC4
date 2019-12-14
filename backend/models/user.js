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
        tel:{
            type: DataType.INTEGER(11)
        }    
    },
    {
        freezeTableName: false,
        timesstamps: true,
    })
    user.associate = function (models){ 
        // associations can be defined here
        user.hasMany(models.address, { foreignKey: 'address_id' })
      };
    return user  
}