import validate from 'validate.js';
import {createAttrArrayBasedValidator} from 'vtypes-utils';

function condition(value, opt, key, attributes) {
  const hasOnePresent = opt.attributes.some(otherKey => {
    const otherValue = validate.getDeepObjectValue(attributes, otherKey);
    return opt.truthy ? !!otherValue : validate.isDefined(otherValue);
  });

  if (hasOnePresent) {
    return true;
  }

  return opt.truthy ? !!value : validate.isDefined(value);
}

export default createAttrArrayBasedValidator(
  condition,
  'required when ALL of these attributes (%{attributes}) are not present'
);

