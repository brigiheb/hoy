const db =require("../models");
const data = require("../config/db.config");
const Choix = db.choixs 
const Op = db.Sequelize.Op


//post hedhi
exports.createChoix = async(req, res)=>{
    const choix = {
        ajouter : req.body.ajouter,
        reponse : req.body.reponse,
        
    }
   
    Choix.create(choix)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the choix."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const ajouter = req.query.ajouter;
    var condition = ajouter ? {ajouter: {[Op.like]: `%${ajouter}%`}}:null;
    Choix.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving choix."
        })
    })
}
// Find a single Demande with id 
exports.findOneChoix = (req, res)=>{
    const id = req.params.id;

    Choix.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Choix with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Choix with id=" + id
          });
    })
};

//hedhi apdate
exports.updateChoix = (req, res)=>{
    const id = req.params.id;

    Choix.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Choix was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Choix with id=${id}. Maybe Choix was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Choix with id=" + id
        })
    })
}

  // Delete a Choix with the specified id in the request
  exports.deleteChoix = (req, res)=>{
    const id = req.params.id;
    Choix.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Choix was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Choix with id=${id}. Maybe Choix was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Choix with id=" + id
                })
            })
        }
    })
  }
