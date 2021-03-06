import validate from 'validate.js';
import prettify from './prettify';
function createAttrBasedValidator(condition, message) {
  function validator(value, options, key, attributes) {

    const opt = Object.assign(
      {
        notValidator: 'has an invalid validator',
        symbolForAny: '*',
        truthy: false,
        message
      },
      options
    );

    if (typeof opt.attribute !== 'string' || !opt.attribute) {
      validate.error(`Attribute ${key} has a falsy or non-string as it's "attribute" option`);
      return prettify(opt.notValidator, key);
    }

    if (condition(value, opt, key, attributes)) {
      return void 0;
    }

    return prettify(opt.message, key, {
      attribute: validate.prettify(opt.attribute),
      attributeValue: validate.isDefined(opt.attributeValue) ? opt.attributeValue : opt.symbolForAny
    });
  }

  return validator;
}
export default createAttrBasedValidator;
