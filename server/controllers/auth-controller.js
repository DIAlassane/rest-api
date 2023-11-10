const pool = require("../db");
const queries = require("../queries/auth-queries");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userLogin = await pool.query(queries.logQuerie, [email]);

        if(userLogin.rows.length === 0) return res.status(401).json({ error : "email is incorrect" });

        // Password check
        const validPassword = await bcrypt.compare(password, users.rows[0].password);
        if(!validPassword) return res.status(401).json({ error : "incorrect password" });
        return res.status(200).json("Success login");
        
    } catch (error) {
        
    }
}

module.exports = {
    login,
}