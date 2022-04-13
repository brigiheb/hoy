const {DataTypes } = require('sequelize');
module.exports = (sequelize,Sequelize)=>{
    const Role = sequelize.define("role",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
          }

});
return Role;
};