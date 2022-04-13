const express = require("express")
const router = express.Router()


const levels = require("../controllers/level.controller")

router.post("/levelPost",levels.createLevel)
router.get("/levelGetAll",levels.findAll)
router.get("/levelGet/:id",levels.findOneLevel)
router.put("/levelUp/:id",levels.updateLevel)
router.delete("/levelDel/:id",levels.deleteLevel)







module.exports = router;