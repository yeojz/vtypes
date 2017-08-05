import validate from 'validate.js';
import {createAttrArrayBasedValidator} from 'vtypes-utils';

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

export default createAttrArrayBasedValidator(
  condition,
  'must be the only key present. Other attributes (%{oAttributes}) should not be present'
);
