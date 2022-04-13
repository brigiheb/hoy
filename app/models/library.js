const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Library = sequelize.define("library",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        libraryName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        time:{
            type: DataTypes.TIME,
            
        },

        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        language:{
            type: DataTypes.STRING,
            allowNull: false,
             
        },
        
        
    })

    return Library;
};