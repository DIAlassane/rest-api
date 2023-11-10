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

        const user = await pool.query(
            queries.createUsers,
            [ role, name, firstname, email, password]
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

// get a user
const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query(queries.getOneUser, [id])

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}

// update the users
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            role,
            name,
            firstname,
            email,
            password } = req.body;

        const updateUser = await pool.query(
            queries.updateUser, 
            [role, name, firstname, email, password, id]
            );

        res.json("user is updated");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
};

// delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query(queries.deleteUser, [id]);

        res.json("user was deleted");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
};

module.exports = {
    getUsers,
    createUsers,
    getOneUser,
    updateUser,
    deleteUser,
}