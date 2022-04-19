const express = require("express")
const router = express.Router()


const users = require("../controllers/user.controller")

router.post("/userPost",users.createUser)
router.get("/userGetAll",users.findAll)
router.get("/userGet/:id",users.findOneUser)
router.put("/userUp/:id",users.updateUser)
router.delete("/userDel/:id",users.deleteUser)







module.exports = router;