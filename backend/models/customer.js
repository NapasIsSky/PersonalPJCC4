module.exports = (sequelize, DataType) => {
    const customer = sequelize.define('customer',{
        customer_id:{
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
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
    customer.associate = function (models) {
        // associations can be defined here
        customer.hasMany(models.customerAddress, { foreignKey: 'customerAddress_id' })
      };
    return customer 
}