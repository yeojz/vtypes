import validate from 'validate.js';
function createAttrArrayBasedValidator(condition, message) {
  function validator(value, options, key, attributes) {

    const opt = Object.assign(
      {
        truthy: false,
        message
      },
      this.options,
      options
    );

    if (!Array.isArray(opt.attributes)) {
      validate.error(`Attribute ${key} has a non-array as it's "attributes" option`);
      return 'has an invalid validator';
    }

    if (condition(value, opt, key, attributes)) {
      return void 0;
    }

    return validate.format(opt.message, {
      attributes: validate.prettify(opt.attributes)
    });
  }

  return validator;
}
export default createAttrArrayBasedValidator;
