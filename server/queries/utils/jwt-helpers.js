const jwt = require("jsonwebtoken");

function jwtTokens({ user_id, name, firstname, email, password }) {
    const user = {user_id, firstname, email, password };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, 
        {expiresIn : '5m'}
        );

    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, 
        {expiresIn : '24h'}
        );
    
        return ({accessToken,refreshToken});
}

module.exports = {jwtTokens}