import validate from 'validate.js';
function createRequiredType(condition, message) {
  function requiredType(value, options, key, attributes) {

    const opt = Object.assign({}, {
      message,
      useTruthy: false
    }, options);

    if (!Array.isArray(opt.attributes)) {
      throw new Error(`The "attributes" option for ${key} should be an array`);
    }

    const isValid = condition(value, opt, key, attributes);

    if (isValid) {
      return void 0;
    }

    return validate.format(opt.message, {
      attributes: validate.prettify(opt.attributes)
    });
  }

  return requiredType;
}

export default createRequiredType;
