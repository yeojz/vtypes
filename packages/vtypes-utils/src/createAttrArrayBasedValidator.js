import validate from 'validate.js';
import prettify from './prettify';
function createAttrArrayBasedValidator(condition, message) {
  function validator(value, options, key, attributes) {

    const opt = Object.assign(
      {
        allowTruthy: false,
        message
      },
      options
    );

    if (!Array.isArray(opt.attributes)) {
      validate.error(`Attribute ${key} has a non-array as it's "attributes" option`);
      return prettify('has an invalid validator', key);
    }

    if (condition(value, opt, key, attributes)) {
      return void 0;
    }

    return prettify(opt.message, key, {
      attributes: validate.prettify(opt.attributes)
    });
  }

  return validator;
}
export default createAttrArrayBasedValidator;
