const createUsers = "INSERT INTO users ( role, name, firstname, email, password ) VALUES ($1, $2, $3, $4, $5) RETURNING *";
const getUers = "SELECT * FROM users";

module.exports = {
    createUsers,
    getUers,
};