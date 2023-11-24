require("dotenv").config();
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const publicKey = process.env.STRIPE_PUBLISHABLE_KEY;

const stripePayment = async (req, res) => {
    try {
        const paymentIntent = await Stripe.charges.create({
        amount: req.body.amount,
        currency: "usd",
        source: req.body.token.id,
    });
    res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        return res.status(400).send({
            error: {
                message: error.message,
            },
        });
    };
};

const configStripe = (req, res) => {
    res.send({
        publishableKey: publicKey
    });
};

module.exports = {
    stripePayment,
    configStripe,
}

// req.body.amount ||