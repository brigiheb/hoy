const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Candidature_offre = sequelize.define("Candidature_offre",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        statut:{
            type: DataTypes.STRING,
            allowNull: false
        },
       
       
    })

    return Candidature_offre;
};