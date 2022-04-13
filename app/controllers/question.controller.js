const db =require("../models");
const data = require("../config/db.config");
const Question = db.questions 
const Op = db.Sequelize.Op


//post hedhi
exports.createQuestion = async(req, res)=>{
    const question = {
        question : req.body.question,
        description : req.body.description,
        
    }
   
    Question.create(question)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the question."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const question = req.query.question;
    var condition = question ? {question: {[Op.like]: `%${question}%`}}:null;
    Question.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving questions."
        })
    })
}
// Find a single Demande with id 
exports.findOneQuestion = (req, res)=>{
    const id = req.params.id;

    Question.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Question with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Question with id=" + id
          });
    })
};

//hedhi apdate
exports.updateQuestion = (req, res)=>{
    const id = req.params.id;

    Question.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Question was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Question with id=${id}. Maybe Question was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Question with id=" + id
        })
    })
}

  // Delete a Question with the specified id in the request
  exports.deleteQuestion = (req, res)=>{
    const id = req.params.id;
    Question.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Question was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Question with id=${id}. Maybe Question was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Question with id=" + id
                })
            })
        }
    })
  }
