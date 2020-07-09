const BaseHttpError = require('./base-http-error');

class Forbidden extends BaseHttpError {
  constructor(error) {
    super(403, error);
  }
}
module.exports = Forbidden;
