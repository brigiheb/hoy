const express = require("express")
const router = express.Router()


const candidature_offres = require("../controllers/candidature_offre.controller")

router.post("/candidature_offrePost",candidature_offres.createCandidature_offre)
router.get("/candidature_offreGetAll",candidature_offres.findAll)
router.get("/candidature_offreGet/:id",candidature_offres.findOneCandidature_offre)
router.put("/candidature_offreUp/:id",candidature_offres.updateCandidature_offre)
router.delete("/candidature_offreDel/:id",candidature_offres.deleteCandidature_offre)







module.exports = router;