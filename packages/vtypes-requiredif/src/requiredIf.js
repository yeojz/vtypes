import validate from 'validate.js';
import {createAttrBasedValidator} from 'vtypes-utils';

function condition(value, opt, key, attributes) {

  const hasValue = opt.allowTruthy ? !!value : validate.isDefined(value);
  const otherValue = validate.getDeepObjectValue(attributes, opt.attribute);

  if (opt.hasOwnProperty('attributeValue')) {
    return otherValue === opt.attributeValue ? hasValue : true;
  }

  if (opt.allowTruthy) {
    return otherValue ? hasValue : true;
  }

  return validate.isDefined(otherValue) ? hasValue : true;
}

export default createAttrBasedValidator(
  condition,
  'is required when %{attribute} is present and equal to %{attributeValue}'
);
