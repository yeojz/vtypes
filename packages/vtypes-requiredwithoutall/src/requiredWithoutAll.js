import validate from 'validate.js';
import {createAttrArrayBasedValidator} from 'vtypes-utils';

function condition(value, options, key, attributes) {
  const hasOnePresent = options.attributes.some(otherKey => {
    const otherValue = validate.getDeepObjectValue(attributes, otherKey);
    return options.truthy ? !!otherValue : validate.isDefined(otherValue);
  });

  if (hasOnePresent) {
    return true;
  }

  return options.truthy ? !!value : validate.isDefined(value);
}

export default createAttrArrayBasedValidator(
  condition,
  'required when ALL of these attributes (%{oAttributes}) are not present'
);

