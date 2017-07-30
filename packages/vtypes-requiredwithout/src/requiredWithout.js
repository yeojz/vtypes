import validate from 'validate.js';
import utils from 'vtypes-utils';

function condition(value, options, key, attributes) {
  const hasOneNotPresent = options.attributes.some(otherKey => {
    const otherValue = validate.getDeepObjectValue(attributes, otherKey);
    const hasValue = options.truthy
      ? !!otherValue
      : validate.isDefined(otherValue);
    return hasValue ? false : true;
  });

  if (hasOneNotPresent) {
    return options.truthy ? !!value : validate.isDefined(value);
  }

  return true;
}

export default utils.createAttrArrayBasedValidator(
  condition,
  'required when any of these attributes (%{attributes}) are not present'
);

