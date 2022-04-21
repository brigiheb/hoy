const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Offre_library = sequelize.define("Offre_library",{
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
       
       
    })

    return Offre_library;
};