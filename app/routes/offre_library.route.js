const express = require("express")
const router = express.Router()


const offre_librarys = require("../controllers/offre_library.controller")

router.post("/offre_libraryPost",offre_librarys.createOffre_library)
router.get("/offre_libraryGetAll",offre_librarys.findAll)
router.get("/offre_libraryGet/:id",offre_librarys.findOneOffre_library)
router.put("/offre_libraryUp/:id",offre_librarys.updateOffre_library)
router.delete("/offre_libraryDel/:id",offre_librarys.deleteOffre_library)







module.exports = router;