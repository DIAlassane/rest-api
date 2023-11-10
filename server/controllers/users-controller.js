const pool = require("../db");
const bcrypt = require('bcrypt');

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
            "INSERT INTO connexion ( role, name, firstname, email, password ) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [ role, name, firstname, email, hashedPassword]
         );

         res.json(user.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    getUsers,
}