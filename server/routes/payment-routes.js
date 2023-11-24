const { Router } = require("express");
const stripePayment = require("../controllers/payment-controller");

const router = Router();

// Payment Routes
router.get('/config', stripePayment.configStripe);
router.post('/create-payment-intent', stripePayment.stripePayment);

module.exports = router;