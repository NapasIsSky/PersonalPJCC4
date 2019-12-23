module.exports = (sequelize, DataType) => {
    const address = sequelize.define('address',{
        address_id:{
          type: DataType.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true
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
    address .associate = (models) => {
        // associations can be defined here
        address.hasMany(models.user, { foreignKey:{name:'address_id'}})
      };
    return address  
}