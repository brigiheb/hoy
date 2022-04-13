const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Category = sequelize.define("category",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        categoryName:{
            type: DataTypes.STRING,
            allowNull: false
        },
       
       
    })

    return Category;
};