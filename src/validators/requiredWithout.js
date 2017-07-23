import validate from 'validate.js';
import createRequiredType from './createRequiredType';

function checkRequiredWithout(value, options, key, attributes) {
  return options.attributes.some(key => {
    const value = validate.getDeepObjectValue(attributes, key);
    if (options.useTruthy) {
      return !!value;
    }
    return validate.isDefined(value);
  });
}

export default createRequiredType(
  checkRequiredWithout,
  '^One of the following attributes is required (%{attributes})'
);
