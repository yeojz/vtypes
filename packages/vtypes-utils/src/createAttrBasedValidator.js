import validate from 'validate.js';
import prettify from './prettify';
function createAttrBasedValidator(condition, message) {
  function validator(value, options, key, attributes) {

    const opt = Object.assign(
      {
        truthy: false,
        message
      },
      options
    );

    if (typeof opt.attribute === 'string' && opt.attribute) {
      validate.error(`Attribute ${key} has a falsy or non-string as it's "attribute" option`);
      return prettify('has an invalid validator', key);
    }

    if (condition(value, opt, key, attributes)) {
      return void 0;
    }

    return prettify(opt.message, key, {
      oAttribute: validate.prettify(opt.attribute),
      oAttributeValue: validate.isDefined(opt.attributeValue) ? opt.attributeValue : '*'
    });
  }

  return validator;
}
export default createAttrBasedValidator;
