const express = require("express")
const router = express.Router()


const keyclouds = require("../controllers/keycloud.controller")

router.post("/keycloudPost",keyclouds.createKeycloud)
router.get("/keycloudGetAll",keyclouds.findAll)
router.get("/keycloudGet/:id",keyclouds.findOneKeycloud)
router.put("/keycloudUp/:id",keyclouds.updateKeycloud)
router.delete("/keycloudDel/:id",keyclouds.deleteKeycloud)







module.exports = router;