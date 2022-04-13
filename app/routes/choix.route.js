const express = require("express")
const router = express.Router()


const choixs = require("../controllers/choix.controller")

router.post("/choixPost",choixs.createChoix)
router.get("/choixGetAll",choixs.findAll)
router.get("/choixGet/:id",choixs.findOneChoix)
router.put("/choixUp/:id",choixs.updateChoix)
router.delete("/choixDel/:id",choixs.deleteChoix)







module.exports = router;