const express = require("express")
const router = express.Router()


const librarys = require("../controllers/library.controller")

router.post("/libraryPost",librarys.createLibrary)
router.get("/libraryGetAll",librarys.findAll)
router.get("/libraryGet/:id",librarys.findOneLibrary)
router.put("/libraryUp/:id",librarys.updateLibrary)
router.delete("/libraryDel/:id",librarys.deleteLibrary)







module.exports = router;