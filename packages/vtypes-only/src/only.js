import validate from 'validate.js';
import { createAttrArrayBasedValidator } from 'vtypes-utils';

function condition(value, opt, key, attributes) {
  const currentValue = opt.allowTruthy ? !!value : validate.isDefined(value);

  if (!currentValue) {
    return true;
  }

  const hasValue = opt.attributes.some(otherKey => {
    const otherValue = validate.getDeepObjectValue(attributes, otherKey);
    return opt.allowTruthy ? !!otherValue : validate.isDefined(otherValue);
  });

  return hasValue ? false : true;
}

export default createAttrArrayBasedValidator(
  condition,
  'must be the only key present. Other attributes (%{attributes}) should not be present'
);
