const db =require("../models");
const data = require("../config/db.config");
const Library = db.librarys 
const Op = db.Sequelize.Op


//post hedhi
exports.createLibrary = async(req, res)=>{
    const library = {
        libraryName : req.body.libraryName,
        time : req.body.time,
        description : req.body.description,
        language : req.body.language,


        
    }
   
    Library.create(library)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the library."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const libraryName = req.query.libraryName;
    var condition = libraryName ? {libraryName: {[Op.like]: `%${libraryName}%`}}:null;
    Library.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving librarys."
        })
    })
}
// Find a single Demande with id 
exports.findOneLibrary = (req, res)=>{
    const id = req.params.id;

    Library.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Library with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Library with id=" + id
          });
    })
};

//hedhi apdate
exports.updateLibrary = (req, res)=>{
    const id = req.params.id;

    Library.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Library was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Library with id=${id}. Maybe Library was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Library with id=" + id
        })
    })
}

  // Delete a Library with the specified id in the request
  exports.deleteLibrary = (req, res)=>{
    const id = req.params.id;
    Library.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Library was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Library with id=${id}. Maybe Library was not found!`
            })
            
        }
    })
  }
