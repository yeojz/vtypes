import validate from 'validate.js';
import utils from 'vtypes-utils';

function condition(value, opt, key, attributes) {
  const otherValue = validate.getDeepObjectValue(attributes, opt.attribute);
  const hasValue = opt.truthy
    ? !!otherValue
    : validate.isDefined(otherValue);

  if (opt.hasOwnProperty('attributeValue')) {
    return otherValue === opt.attributeValue ? hasValue : true;
  }

  if (opt.truthy) {
    return otherValue ? hasValue : true;
  }

  return validate.isDefined(otherValue) ? hasValue : true;
}

export default utils.createAttrBasedValidator(
  condition,
  'required when %{attribute} is present and equal to %{attributeValue}'
);
