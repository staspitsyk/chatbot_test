const BaseHttpError = require('./base-http-error');

class Unauthorized extends BaseHttpError {
  constructor(error) {
    super(401, error);
  }
}

module.exports = Unauthorized;
