const jwt = require("jsonwebtoken");

const handler = {
    verifyToken: (req, res, next) => {
        try {
            if (!req.cookies.bearer) {
                return res.status(403).send('No token');
            }

            let token = req.cookies.bearer;
            res.locals.currentUser = jwt.verify(token, 'secretkey', {
                algorithm: "HS256",
                expiresIn: "1h",
            });
            next();
        } catch (err) {
            console.log(err.message);
            if (err instanceof jwt.JsonWebTokenError || err.message === "noCookie" || err.message === "invalidCookie")
                res.status(401).send();
            else res.status(400).send();
        }
    },
}

module.exports = handler;