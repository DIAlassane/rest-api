const createUsers = "INSERT INTO users ( role, name, firstname, email, password ) VALUES ($1, $2, $3, $4, $5) RETURNING *";
const getUers = "SELECT * FROM users";
const getOneUser = "SELECT * FROM users WHERE user_id = $1";
const updateUser = "UPDATE users SET role = $1, name = $2, firstname = $3, email = $4, password = $5 WHERE user_id = $6";
const deleteUser = "DELETE FROM users WHERE user_id = $1";

module.exports = {
    createUsers,
    getUers,
    getOneUser,
    updateUser,
    deleteUser,
};