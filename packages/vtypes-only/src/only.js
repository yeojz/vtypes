import validate from 'validate.js';
import { createAttrArrayBasedValidator } from 'vtypes-utils';

function condition(value, opt, key, attributes) {
  const currentValue = opt.truthy ? !!value : validate.isDefined(value);

  if (!currentValue) {
    return true;
  }

  const hasValue = opt.attributes.some(otherKey => {
    const otherValue = validate.getDeepObjectValue(attributes, otherKey);
    return opt.truthy ? !!otherValue : validate.isDefined(otherValue);
  });

  return hasValue ? false : true;
}

export default createAttrArrayBasedValidator(
  condition,
  'must be the only key with value present. Other attributes (%{attributes}) should not be present'
);
