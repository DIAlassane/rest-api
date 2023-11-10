const pool = require("../db");
const queries = require("../queries/auth-queries");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtTokens = require("../queries/utils/jwt-helpers");

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
            let tokens = jwtTokens.jwtTokens(userLogin.rows[0]);
            res.cookie('refresh_token', tokens.refreshToken, {httpOnly: true});
            res.json(tokens)
        }

    } catch (error) {
        res.status(401).json({ error : error.message })
    }
}

module.exports = {
    login,
}