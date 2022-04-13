const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Choix = sequelize.define("choix",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        ajouter:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        reponse:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
       
    })
 
    return Choix;
};