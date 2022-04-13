const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Question = sequelize.define("question",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        question:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
       
    })
 
    return Question;
};