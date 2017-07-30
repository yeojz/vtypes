import validate from 'validate.js';
import utils from 'vtypes-utils';

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

export default utils.createAttrArrayBasedValidator(
  condition,
  'required when ALL of these attributes (%{attributes}) are not present'
);

