require("dotenv").config();
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Users Routes
app.use('/users', usersRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port} `);
});