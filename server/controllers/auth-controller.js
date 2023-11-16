const pool = require("../db");
const queries = require("../queries/auth-queries");

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { rows } = await pool.query(queries.logQuerie, [email, password]);
    
        if (rows.length > 0) {
            res.json(rows); // Utilisateur trouvé, renvoyer les données de l'utilisateur
        } else {
            res.status(401).json({ message: "Wrong email/password combination" }); // Aucun utilisateur trouvé avec cet email/mot de passe
        }
    } catch (error) {
        console.error("Erreur lors de la tentative de connexion :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const logout = async (req, res) => {
    try {
        // Supprimer la session de l'utilisateur de la base de données (vous devez avoir une table pour stocker les sessions utilisateur)
        const userId = req.session.users.id;
        await pool.query("DELETE FROM sessions WHERE user_id = $1", [userId]);

        // Effacer le cookie de l'utilisateur
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true,
        }).status(200).json("Vous avez bien été déconnecté");
    } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// --------------------------------------------------- Client -------------------------------------------------

const clientLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { rows } = await pool.query(queries.logQuerieClient, [email, password]);
    
        if (rows.length > 0) {
            res.json(rows); // Utilisateur trouvé, renvoyer les données de l'utilisateur
        } else {
            res.status(401).json({ message: "Wrong email/password combination" }); // Aucun utilisateur trouvé avec cet email/mot de passe
        }
    } catch (error) {
        console.error("Erreur lors de la tentative de connexion :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const clientLogout = async (req, res) => {
    try {
        // Supprimer la session de l'utilisateur de la base de données (vous devez avoir une table pour stocker les sessions utilisateur)
        const userId = req.session.users.id;
        await pool.query("DELETE FROM sessions WHERE user_id = $1", [userId]);

        // Effacer le cookie de l'utilisateur
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true,
        }).status(200).json("Vous avez bien été déconnecté");
    } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    login,
    logout,
    clientLogin,
    clientLogout,
}