const passport = require('passport');
const { Unauthorized } = require('../../common/exeptions/index');


const authJwt = (req, res, next) => {
    const authMiddleWare = passport.authenticate('jwt', { session: false },
        (err, user) => {
            if (!user) {
                return next(new Unauthorized('Invalid jwt token'));
            } else {
                req.user = user;
                next();
        }
    });
    authMiddleWare(req, res, next);
};

module.exports = authJwt;