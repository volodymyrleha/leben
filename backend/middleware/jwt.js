const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.json({
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            message: 'Auth token is not supplied'
        });
    }
};

module.exports = {
    checkToken: checkToken
}
