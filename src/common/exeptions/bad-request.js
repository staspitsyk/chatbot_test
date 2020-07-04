const BaseHttpError = require('./base-http-error');

class BadRequest extends BaseHttpError {
  constructor(error) {
    super(400, error);
  }
}

module.exports = BadRequest;
