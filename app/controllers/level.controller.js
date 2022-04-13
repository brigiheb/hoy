const db =require("../models");
const data = require("../config/db.config");
const Level = db.levels
const Op = db.Sequelize.Op


//post hedhi
exports.createLevel = async(req, res)=>{
    const level = {
        levelName : req.body.levelName,
        
        
    }
   
    Level.create(level)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the level."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const levelName = req.query.levelName;
    var condition = levelName ? {levelName: {[Op.like]: `%${levelName}%`}}:null;
    Level.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving levels."
        })
    })
}
// Find a single Demande with id 
exports.findOneLevel = (req, res)=>{
    const id = req.params.id;

    Level.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Level with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Level with id=" + id
          });
    })
};

//hedhi apdate
exports.updateLevel = (req, res)=>{
    const id = req.params.id;

    Level.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Level was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Level with id=${id}. Maybe Level was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Level with id=" + id
        })
    })
}

  // Delete a Level with the specified id in the request
  exports.deleteLevel = (req, res)=>{
    const id = req.params.id;
    Level.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Level was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Level with id=${id}. Maybe Level was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Level with id=" + id
                })
            })
        }
    })
  }
