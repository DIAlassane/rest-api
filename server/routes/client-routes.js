const { Router } = require("express");
const clientController = require('../controllers/client-controller');
const loginController = require('../controllers/auth-controller');

const router = Router();

// users routes
router.get('/', clientController.getClient);
router.post('/create', clientController.createClient);
router.get('/client/:id', clientController.getOneClient);
router.put('/updateClient/:id', clientController.updateClient);
router.delete('/deleteClient/:id', clientController.deleteClient);

// login routes
router.post('/login', loginController.clientLogin);
router.post('/logout', loginController.clientLogout);

module.exports = router;