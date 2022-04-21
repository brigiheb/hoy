const express = require("express")
const router = express.Router()


const evaluations = require("../controllers/evaluation.controller")

router.post("/evaluationPost",evaluations.createEvaluation)
router.get("/evaluationGetAll",evaluations.findAll)
router.get("/evaluationGet/:id",evaluations.findOneEvaluation)
router.put("/evaluationUp/:id",evaluations.updateEvaluation)
router.delete("/evaluationDel/:id",evaluations.deleteEvaluation)







module.exports = router;