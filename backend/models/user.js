module.exports = (sequelize, DataType) => {
    const user = sequelize.define('user',{
        user_id:{
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
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