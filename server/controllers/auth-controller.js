const pool = require("../db");
const queries = require("../queries/auth-queries");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userLogin = await pool.query(queries.logQuerie, [email]);

        if(userLogin.rows.length === 0) return res.status(401).json({ error : "email is incorrect" });

        // Password check
        const validPassword = await bcrypt.compare(password, userLogin.rows[0].password);
        if (!validPassword) {
            return res.status(401).json({ error: "Incorrect password" });
        } else {
            return res.status(200).json({ message: "Success login" });
        }

    } catch (error) {
        
    }
}

module.exports = {
    login,
}