import validate from 'validate.js';
import {createAttrBasedValidator} from 'vtypes-utils';

function condition(value, opt, key, attributes) {
  const otherValue = validate.getDeepObjectValue(attributes, opt.attribute);
  const hasValue = opt.truthy
    ? !!otherValue
    : validate.isDefined(otherValue);

  if (opt.hasOwnProperty('attributeValue')) {
    return otherValue !== opt.attributeValue ? true : hasValue;
  }

  if (opt.truthy) {
    return otherValue ? true : hasValue;
  }

  return validate.isDefined(otherValue) ? true : hasValue;
}

export default createAttrBasedValidator(
  condition,
  'required when %{optionAttribute} is not present or equal to %{optionAttributeValue}'
);
