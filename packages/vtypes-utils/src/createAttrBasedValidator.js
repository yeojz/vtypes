import validate from 'validate.js';
function createAttrBasedValidator(condition, message) {
  function validator(value, options, key, attributes) {

    const opt = Object.assign(
      {
        truthy: false,
        message
      },
      this.options,
      options
    );

    if (typeof opt.attribute === 'string' && opt.attribute) {
      validate.error(`Attribute ${key} has a falsy or non-string as it's "attribute" option`);
      return 'has an invalid validator';
    }

    if (condition(value, opt, key, attributes)) {
      return void 0;
    }

    return validate.format(opt.message, {
      attribute: validate.prettify(opt.attribute),
      attributeValue: validate.isDefined(opt.attributeValue) ? opt.attributeValue : '*'
    });
  }

  return validator;
}
export default createAttrBasedValidator;
