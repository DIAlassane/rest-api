const logQuerie = "SELECT * FROM users WHERE email = $1 AND password = $2";
const logQuerieClient = "SELECT * FROM client WHERE email = $1 AND password = $2";

module.exports = {
    logQuerie,
    logQuerieClient,
};