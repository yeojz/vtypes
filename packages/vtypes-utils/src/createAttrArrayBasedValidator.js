import validate from 'validate.js';
import prettify from './prettify';

function formatMessage(message, opt, key) {
  return prettify(message, key, {
    attributes: validate.prettify(opt.attributes)
  });
}

function createAttrArrayBasedValidator(condition, message) {
  function validator(value, options, key, attributes) {

    const opt = Object.assign(
      {
        truthy: false,
        notValidator: 'has an invalid validator',
        message
      },
      options
    );

    if (!Array.isArray(opt.attributes)) {
      validate.error(`Attribute ${key} has a non-array as it's "attributes" option`);
      return formatMessage(opt.notValidator, opt, key);
    }

    if (condition(value, opt, key, attributes)) {
      return void 0;
    }

    return formatMessage(opt.message, opt, key);
  }

  return validator;
}
export default createAttrArrayBasedValidator;
