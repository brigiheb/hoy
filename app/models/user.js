const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const User = sequelize.define("user",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        nom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        prénom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true  
        },
        motdepasse:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        telNum:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true  
        },
        companyName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })

    return User;
};