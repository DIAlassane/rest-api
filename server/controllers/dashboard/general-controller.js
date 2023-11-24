const pool = require("../../db");

const getUserOnGeneral = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getUserOnGeneral,
}