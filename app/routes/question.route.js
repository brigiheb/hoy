const express = require("express")
const router = express.Router()


const questions = require("../controllers/question.controller")

router.post("/questionPost",questions.createQuestion)
router.get("/questionGetAll",questions.findAll)
router.get("/questionGet/:id",questions.findOneQuestion)
router.put("/questionUp/:id",questions.updateQuestion)
router.delete("/questionDel/:id",questions.deleteQuestion)







module.exports = router;