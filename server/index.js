// Librairie
require("dotenv").config();
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionClient = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');

// Routes
const usersRoutes = require('./routes/routes');
const clientRoutes = require('./routes/client-routes');
const paymentRoutes = require('./routes/payment-routes');
const generalRoutes = require('./routes/general-routes');
const managementRoutes = require('./routes/management-routes');
const salesRoutes = require('./routes/sales-routes');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Autorise les requêtes provenant de ce domaine
    credentials: true, // Indiquez que les cookies et les en-têtes d'authentification peuvent être inclus
};

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
    console.log(req.cookies); // Affiche les cookies dans la console
    next();
});

// ----------------------- Entreprise sessions ------------------------------------
app.use(session({
    secret: 'password',
    credentials: true,
    name: 'cookies-project',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.ENVIRONMENT === 'production' ? true : 'auto',
        httpOnly: true,
        sameSite: process.env.ENVIRONMENT === 'production' ? 'none' : 'lax',
    }
}));

app.use(session({
    secret: 'password',
    resave: false,
    saveUninitialized: true,
    cookie: {
        sameSite: "none",
        secure: true
    }
}));

// ------------------------------- Client sessions ---------------------------------------
app.use(sessionClient({
    secret: 'password',
    credentials: true,
    name: 'cookies-client',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.ENVIRONMENT === 'production' ? true : 'auto',
        httpOnly: true,
        sameSite: process.env.ENVIRONMENT === 'production' ? 'none' : 'lax',
    }
}));

app.use(sessionClient({
    secret: 'password',
    resave: false,
    saveUninitialized: true,
    cookie: {
        sameSite: "none",
        secure: true
    }
}));

// app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('combined', { common: 'common' }));

// Users Routes
app.use('/users', usersRoutes);
// Client Routes
app.use('/client', clientRoutes);
// Payment Routes
app.use('/payment', paymentRoutes);
// Dashboard Routes
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port} `);
});