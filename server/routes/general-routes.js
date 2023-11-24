const { Router } = require("express");
const { getUserOnGeneral } = require("../controllers/dashboard/general-controller");

const router = Router();

// voir l'utilisateur
router.get('/user/:id', getUserOnGeneral);

module.exports = router;