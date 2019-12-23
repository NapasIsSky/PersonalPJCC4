module.exports = (sequelize, DataType) => {
    const customer = sequelize.define('customer',{
        customer_id:{
          type: DataType.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true
        },
        customerName: {
            type: DataType.STRING(20)
        },
        customerTel:{
            type: DataType.INTEGER(10)
        },
        customerEmail:{
          type:DataType.STRING(100)
        },
        customerMaketingName:{
          type:DataType.STRING(100)
        },
        customerMaketingContact:{
          type:DataType.STRING(300)
        }
        },
    {
        freezeTableName: true,
        timesstamps: false,
    })
    customer.associate = (models) => {
        // associations can be defined here
        customer.belongsTo(models.customerAddress,{foreignKey:{name:'customerAddress_id'}})
          
        customer.hasMany(models.rackLog, { foreignKey:{name:'customer_id'}})
      };
    return customer 
}