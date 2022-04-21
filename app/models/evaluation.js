const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Evaluation = sequelize.define("Evaluation",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        score:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
       
       
    })

    return Evaluation;
};