const db =require("../models");
const data = require("../config/db.config");
const Keycloud = db.keyclouds
const Op = db.Sequelize.Op


//post hedhi
exports.createKeycloud = async(req, res)=>{
    const keycloud = {
        keyName : req.body.keyName,
        
        
    }
   
    Keycloud.create(keycloud)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the key."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const keyName = req.query.keyName;
    var condition = keyName ? {keyName: {[Op.like]: `%${keyName}%`}}:null;
    Keycloud.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving keyclouds."
        })
    })
}
// Find a single Demande with id 
exports.findOneKeycloud = (req, res)=>{
    const id = req.params.id;

    Key.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Keycloud with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Keycloud with id=" + id
          });
    })
};

//hedhi apdate
exports.updateKeycloud = (req, res)=>{
    const id = req.params.id;

    Keycloud.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Keycloud was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Keycloud with id=${id}. Maybe Keycloud was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Keycloud with id=" + id
        })
    })
}

  // Delete a Keycloud with the specified id in the request
  exports.deleteKeycloud = (req, res)=>{
    const id = req.params.id;
    Keycloud.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Keycloud was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Keycloud with id=${id}. Maybe Keycloud was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Keycloud with id=" + id
                })
            })
        }
    })
  }
