const express = require("express")
const router = express.Router()


const categorys = require("../controllers/category.controller")

router.post("/categoryPost",categorys.createCategory)
router.get("/categoryGetAll",categorys.findAll)
router.get("/categoryGet/:id",categorys.findOneCategory)
router.put("/categoryUp/:id",categorys.updateCategory)
router.delete("/categoryDel/:id",categorys.deleteCategory)







module.exports = router;