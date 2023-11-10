require("dotenv").config();
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/routes');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Autorise les requêtes provenant de ce domaine
    credentials: true, // Indiquez que les cookies et les en-têtes d'authentification peuvent être inclus
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

// Users Routes
app.use('/users', usersRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port} `);
});