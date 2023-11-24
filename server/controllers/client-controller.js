const pool = require("../db");
const queries = require("../queries/client-queries");

const bcrypt = require('bcrypt');

// Create Users
const createClient = async (req, res) => {
    try {
        const { 
            name,
            lastname,
            number,
            address,
            compaddress,
            postalcode,
            country,
            city,        
            email,
            password } = req.body;

        const user = await pool.query(
            queries.createClient,
            [ name, lastname,number, address, compaddress, postalcode, country, city, email, password ]
         );

         res.json(user.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
}

// Get Users
const getClient = async (req, res) => {
    try {
        const users = await pool.query(queries.getClient);
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
};

// get a user
const getOneClient = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query(queries.getOneClient, [id])

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}

// update the users
const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            name,
            lastname,
            number,
            address,
            compaddress,
            postalcode,
            country,
            city,        
            email,
            password } = req.body;

        const updateUser = await pool.query(
            queries.updateClient, 
            [ name, lastname,number, address, compaddress, postalcode, country, city, email, password, id]
            );

        res.json("user is updated");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
};

// delete a user
const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query(queries.deleteClient, [id]);

        res.json("user was deleted");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
};

// -------------------------------------------- ------------------------------------------ -----------------------------

const getProducts = async (req, res) => {
    try {
      const productsWithStats = await pool.query(
        'SELECT p.*, s.* FROM produit p LEFT JOIN statproduit s ON p.product_id = s.product_id'
      );
  
      res.status(200).json(productsWithStats.rows);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Error retrieving products' });
    }
  };
  

module.exports = {
    getClient,
    createClient,
    getOneClient,
    updateClient,
    deleteClient,
    getProducts,
}