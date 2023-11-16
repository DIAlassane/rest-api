const createClient = "INSERT INTO client ( name, lastname, number, address, compaddress, postalcode, country, city, email, password ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
const getClient = "SELECT * FROM client";
const getOneClient = "SELECT * FROM client WHERE user_id = $1";
const updateClient = "UPDATE client SET name = $1, lastname = $2, email = $3, password = $4, number = $5, address = $6, compaddress = $7, postalcode = $8, country = $9, city = $10 WHERE user_id = $11";
const deleteClient = "DELETE FROM client WHERE user_id = $1";

module.exports = {
    createClient,
    getClient,
    getOneClient,
    updateClient,
    deleteClient,
};