require("dotenv").config();
const express = require('express');
const usersRoutes = require('./routes/routes');

const app = express();

// Users Routes
app.use('/users', usersRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port} `);
});