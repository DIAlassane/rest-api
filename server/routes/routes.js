const { Router } = require("express");
const userController = require('../controllers/users-controller');
const loginController = require('../controllers/auth-controller');

const router = Router();

// users routes
router.get('/', userController.getUsers);
router.post('/create', userController.createUsers);

// login routes
router.post('/login', loginController.login);

module.exports = router;