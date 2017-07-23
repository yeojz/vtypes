import validate from 'validate.js';
import createRequiredType from './createRequiredType';

function checkRequiredWithoutAll(value, options, key, attributes) {
  const count = options.attributes.reduce((collect, key) => {
    const value = validate.getDeepObjectValue(attributes, key);

    if (options.useTruthy) {
      if (value) {
        collect += 1;
      }
      return collect;
    }

    if (validate.isDefined(value)) {
      collect += 1;
      return collect;
    }

    return collect;
  }, 0);

  return count < 2;
}

export default createRequiredType(
  checkRequiredWithoutAll,
  '^Only one the following attributes are allowed (%{attributes})'
);
