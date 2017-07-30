import validate from 'validate.js';
import utils from 'vtypes-utils';

function condition(value, opt, key, attributes) {
  const hasValue = opt.attributes.some(otherKey => {
    const otherValue = validate.getDeepObjectValue(attributes, otherKey);
    return opt.truthy ? !!otherValue : validate.isDefined(otherValue);
  });

  if (hasValue) {
    return opt.truthy ? !!value : validate.isDefined(value);
  }

  return true;
}

export default utils.createAttrArrayBasedValidator(
  condition,
  'must be the only key present. Other attributes (%{attributes}) should not be present'
);
