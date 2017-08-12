import validate from 'validate.js';
import {createAttrArrayBasedValidator} from 'vtypes-utils';

function condition(value, options, key, attributes) {
  const hasOnePresent = options.attributes.some(otherKey => {
    const otherValue = validate.getDeepObjectValue(attributes, otherKey);
    return options.truthy ? !!otherValue : validate.isDefined(otherValue);
  });

  if (hasOnePresent) {
    return options.truthy ? !!value : validate.isDefined(value);
  }

  return true;
}

export default createAttrArrayBasedValidator(
  condition,
  'is required when any of these attributes (%{attributes}) are present'
);

