const db =require("../models");
const data = require("../config/db.config");
const Category = db.categorys 
const Op = db.Sequelize.Op


//post hedhi
exports.createCategory = async(req, res)=>{
    const category = {
        categoryName : req.body.categoryName,
        
    }
   
    Category.create(category)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the category."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const categoryName = req.query.categoryName;
    var condition = categoryName ? {categoryName: {[Op.like]: `%${categoryName}%`}}:null;
    Category.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving category."
        })
    })
}
// Find a single Demande with id 
exports.findOneCategory = (req, res)=>{
    const id = req.params.id;

    Category.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Category with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Category with id=" + id
          });
    })
};

//hedhi apdate
exports.updateCategory = (req, res)=>{
    const id = req.params.id;

    Category.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Category was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Category with id=" + id
        })
    })
}

  // Delete a Category with the specified id in the request
  exports.deleteCategory = (req, res)=>{
    const id = req.params.id;
    Category.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Category was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Category with id=${id}. Maybe Category was not found!`
            })
            
        }
    })
  }
