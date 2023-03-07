const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (!authHeader) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if (err) {
            return res.status(401).json({ msg: 'Token is not valid' });
        }
        req.user = user;
        next();
    });
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req,res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({ msg: 'You are not allowed to do that!'})
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization };