const db =require("../models");
const data = require("../config/db.config");
const Evaluation = db.evaluations
const Op = db.Sequelize.Op


//post hedhi
exports.createEvaluation = async(req, res)=>{
    const evaluation = {
        score : req.body.score,
         
    }
   
    Evaluation.create(evaluation)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the evaluation."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const score = req.query.score;
    var condition = score ? {score: {[Op.like]: `%${score}%`}}:null;
    Evaluation.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving evaluations."
        })
    })
}
// Find a single Demande with id 
exports.findOneEvaluation = (req, res)=>{
    const id = req.params.id;

    Evaluation.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Evaluation with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Evaluation with id=" + id
          });
    })
};

//hedhi apdate
exports.updateEvaluation = (req, res)=>{
    const id = req.params.id;

    Evaluation.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Evaluation was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Evaluation with id=${id}. Maybe Evaluation was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Evaluation with id=" + id
        })
    })
}

  // Delete a Evaluation with the specified id in the request
  exports.deleteEvaluation = (req, res)=>{
    const id = req.params.id;
    Evaluation.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Evaluation was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Evaluation with id=${id}. Maybe Evaluation was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Evaluation with id=" + id
                })
            })
        }
    })
  }
