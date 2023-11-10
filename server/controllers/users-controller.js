const pool = require("../db");
const queries = require("../queries/user-queries")

const bcrypt = require('bcrypt');

// Create Users
const createUsers = async (req, res) => {
    try {
        const { 
            role,
            name,
            firstname,
            email,
            password } = req.body;

            // Hashage du mot de passe avec bcrypt
        const hashedPassword = await bcrypt.hash(password, 10); // Le deuxième argument est le coût du hash (nombre de tours)

        const user = await pool.query(
            queries.createUsers,
            [ role, name, firstname, email, hashedPassword]
         );

         res.json(user.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
}

// Get Users
const getUsers = async (req, res) => {
    try {
        const users = await pool.query(queries.getUers);
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    getUsers,
    createUsers,
}