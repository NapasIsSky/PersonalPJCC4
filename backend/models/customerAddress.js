module.exports = (sequelize, DataType) => {
    const customerAddress = sequelize.define('customerAddress',{
        customerAddress_id:{
          type: DataType.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true
        },
        no: {
            type: DataType.INTEGER(11)
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
    customerAddress.associate = (models) => {
        // associations can be defined here
        customerAddress.hasMany(models.customer, {foreignKey: {name:'customerAddress_id'}})
      };
    return customerAddress
}