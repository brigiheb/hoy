const db =require("../models");
const data = require("../config/db.config");
const Candidature_offre = db.candidature_offres
const Op = db.Sequelize.Op


//post hedhi
exports.createCandidature_offre = async(req, res)=>{
    const candidature_offre = {
        statut : req.body.statut,
         
    }
   
    Candidature_offre.create(candidature_offre)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the candidture_offre."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const statut = req.query.statut;
    var condition = statut ? {statut: {[Op.like]: `%${statut}%`}}:null;
    Candidature_offre.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving candidature_offres."
        })
    })
}
// Find a single Demande with id 
exports.findOneCandidature_offre = (req, res)=>{
    const id = req.params.id;

    Candidature_offre.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Candidature_offre with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Candidature_offre with id=" + id
          });
    })
};

//hedhi apdate
exports.updateCandidature_offre = (req, res)=>{
    const id = req.params.id;

    Candidature_offre.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Candidature_offre was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Candidature_offre with id=${id}. Maybe Candidature_offre was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Candidature_offre with id=" + id
        })
    })
}

  // Delete a Candidature_offre with the specified id in the request
  exports.deleteCandidature_offre = (req, res)=>{
    const id = req.params.id;
    Candidature_offre.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Candidature_offre was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Candidature_offre with id=${id}. Maybe Candidature_offre was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Candidature_offre with id=" + id
                })
            })
        }
    })
  }
