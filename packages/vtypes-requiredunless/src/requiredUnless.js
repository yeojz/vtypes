import validate from 'validate.js';
import {createAttrBasedValidator} from 'vtypes-utils';

function condition(value, opt, key, attributes) {

  const hasValue = opt.allowTruthy ? !!value : validate.isDefined(value);
  const otherValue = validate.getDeepObjectValue(attributes, opt.attribute);

  if (opt.hasOwnProperty('comparator') && typeof opt.comparator === 'function') {
    return opt.comparator(value, otherValue) || hasValue;
  }

  if (opt.hasOwnProperty('attributeValue')) {
    return otherValue === opt.attributeValue || hasValue;
  }

  if (opt.allowTruthy) {
    return !!otherValue || hasValue;
  }

  return validate.isDefined(otherValue) || hasValue;
}

export default createAttrBasedValidator(
  condition,
  'is required when %{attribute} is not present with %{attributeValue}'
);
