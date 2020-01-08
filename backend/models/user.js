module.exports = (sequelize, DataType) => {
    const user = sequelize.define('user',{
        user_id:{
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        username:{
            type: DataType.STRING(100)
        },
        password:{
            type: DataType.STRING(100)
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
            type: DataType.STRING(100)
        },
        role:{
            type: DataType.ENUM('manager', 'staff')
        }  
    },
    {
        freezeTableName: true,
        timesstamps: true,
    })
    user.associate = (models) => { 
        // // associations can be defined here
        user.belongsTo(models.address, {foreignKey:{name:'address_id'}})
        user.hasMany(models.stock, {foreignKey:{name:'user_id'}})
      };
    return user  
}
