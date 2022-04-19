const db =require("../models");
const data = require("../config/db.config");
const User = db.users 
const Op = db.Sequelize.Op


//post hedhi
exports.createUser = async(req, res)=>{
    const user = {
        nom : req.body.nom,
        prénom : req.body.prénom,
        email : req.body.email,
        motdepasse : req.body.motdepasse,
        telNum : req.body.telNum,
        companyName : req.body.companyName,

        
    }
   
    User.create(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the user."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const nom = req.query.nom;
    var condition = nom ? {nom: {[Op.like]: `%${nom}%`}}:null;
    User.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving user."
        })
    })
}
// Find a single Demande with id 
exports.findOneUser = (req, res)=>{
    const id = req.params.id;

    User.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find User with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving User with id=" + id
          });
    })
};

//hedhi apdate
exports.updateUser = (req, res)=>{
    const id = req.params.id;

    User.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "User was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating User with id=" + id
        })
    })
}

  // Delete a User with the specified id in the request
  exports.deleteUser = (req, res)=>{
    const id = req.params.id;
    User.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "User was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete User with id=${id}. Maybe User was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete User with id=" + id
                })
            })
        }
    })
  }
