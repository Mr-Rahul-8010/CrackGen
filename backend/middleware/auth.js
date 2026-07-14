const jwt = require('jsonwebtoken');

function auth(req, res, next) {

    const token = req.cookies.token;

    if (!token) {

        return res.status(401).json({
            msg: "Please Login"
        });

    }

    try {

        const user = jwt.verify(token, "secret");

        req.user = user;

        next();

    }

    catch (err) {

        return res.status(401).json({
            msg: "Invalid Token"
        });

    }

}

module.exports = auth;