const jwt = require('jsonwebtoken');

function createToken(user)
{
    const payload = {
        email: user.email,
        id: user.id
    };

    const options = {
        expiresIn: '1hr'
    };

    return jwt.sign(payload, process.env.JWTKEY, options);
}

module.exports = createToken;