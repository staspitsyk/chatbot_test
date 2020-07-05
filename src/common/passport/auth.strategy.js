
const { Strategy, ExtractJwt } = require('passport-jwt');
const config = require('../../config.json');
const  studentsService  = require('../../modules/students/students.service');
const  teachersService  = require('../../modules/teachers/teachers.service') ;
const { Unauthorized } = require('../../common/exeptions/index');


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.secretKey,
    expiresIn: config.auth.expiresIn,
};

const strategy = new Strategy(opts, async (jwtPayload, done) => {
  try {
    const user =
      (await studentsService.findOneByEmail(jwtPayload.email)) ||
      (await teachersService.findOneByEmail(jwtPayload.email));
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    done(new Unauthorized(err.message), false);
}

});

module.exports = strategy;
