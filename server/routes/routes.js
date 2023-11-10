const { Router } = require("express");
const userController = require('../controllers/users-controller');
const loginController = require('../controllers/auth-controller');
const { authenticateToken } = require("../queries/middleware/authorization");

const router = Router();

// users routes
router.get('/', authenticateToken, userController.getUsers);
router.post('/create', userController.createUsers);

// login routes
router.post('/login', loginController.login);

module.exports = router;