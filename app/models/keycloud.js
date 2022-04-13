const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Keycloud = sequelize.define("Keycloud",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
          keyName:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        
    })

    return Keycloud;
};