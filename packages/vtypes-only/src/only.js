import validate from 'validate.js';
import {createAttrArrayBasedValidator} from 'vtypes-utils';

function condition(value, opt, key, attributes) {
  if (!validate.isDefined(value)) {
    return true;
  }

  const hasValue = opt.attributes.some(otherKey => {
    const otherValue = validate.getDeepObjectValue(attributes, otherKey);
    return opt.allowTruthy ? !!otherValue : validate.isDefined(otherValue);
  });

  if (hasValue) {
    return opt.allowTruthy ? !!value : validate.isDefined(value);
  }

  return true;
}

export default createAttrArrayBasedValidator(
  condition,
  'must be the only key present. Other attributes (%{oAttributes}) should not be present'
);
