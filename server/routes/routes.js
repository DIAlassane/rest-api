const { Router } = require("express");
const userController = require('../controllers/users-controller');
const loginController = require('../controllers/auth-controller');

const router = Router();

// users routes
router.get('/', userController.getUsers);
router.post('/create', userController.createUsers);
router.get('/users/:id', userController.getOneUser);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

// login routes
router.post('/login', loginController.login);
router.post('/logout', loginController.logout);

module.exports = router;