const db =require("../models");
const data = require("../config/db.config");
const Offre_library = db.offre_librarys
const Op = db.Sequelize.Op


//post hedhi
exports.createOffre_library = async(req, res)=>{
    const offre_library = {
        nom : req.body.nom,
         
    }
   
    Offre_library.create(offre_library)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the offre_library."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const nom = req.query.nom;
    var condition = nom ? {nom: {[Op.like]: `%${nom}%`}}:null;
    Offre_library.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving offre_library."
        })
    })
}
// Find a single Demande with id 
exports.findOneOffre_library = (req, res)=>{
    const id = req.params.id;

    Offre_library.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Offre_library with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Offre_library with id=" + id
          });
    })
};

//hedhi apdate
exports.updateOffre_library = (req, res)=>{
    const id = req.params.id;

    Offre_library.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Offre_library was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Offre_library with id=${id}. Maybe Offre_library was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Offre_library with id=" + id
        })
    })
}

  // Delete a Offre_library with the specified id in the request
  exports.deleteOffre_library = (req, res)=>{
    const id = req.params.id;
    Offre_library.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Offre_library was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Offre_library with id=${id}. Maybe Offre_library was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Offre_library with id=" + id
                })
            })
        }
    })
  }
