const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const { Unauthorized } = require('../../common/exeptions/index');
const studentsService = require('../students/students.service');
const teachersService = require('../teachers/teachers.service');

class AuthService {
  async login({ email, password }) {
    const user = (await studentsService.findOneByEmail(email))
      || (await teachersService.findOneByEmail(email));

    if (!user) {
      throw new Unauthorized('Wrong email or password');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Unauthorized('Wrong email or password');
    }

    const token = jwt.sign({ email: user.email, id: user.id }, config.auth.secretKey);

    return {
      token,
    };
  }
}

module.exports = new AuthService();
