const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Level = sequelize.define("Level",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        levelName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })

    return Level;
};