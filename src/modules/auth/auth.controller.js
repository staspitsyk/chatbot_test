const authService = require('./auth.servise');

class AuthController {
  async login(req, res, next) {
    try {
      const token = await authService.login(req.body);
      res.json(token);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AuthController();
