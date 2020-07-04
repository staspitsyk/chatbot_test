const BaseHttpError = require('./base-http-error');

class NotFound extends BaseHttpError {
  constructor(error) {
    super(404, error);
  }
}

module.exports = NotFound;
