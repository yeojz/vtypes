import validate from 'validate.js';

function invariant(value, options, key, attributes) {
  const opt = Object.assign(
    {
      allowNil: false,
      allowTruthy: false,
      message: 'invariant violation'
    },
    options
  );

  if (!validate.isDefined(value) && opt.allowNil) {
    return void 0;
  }

  if (typeof opt.condition !== 'function') {
    validate.error(`Attribute ${key} has a non-function as a condition`);
    return 'has an invalid validator';
  }

  const isValid = opt.condition(value, key, attributes);
  if (opt.allowTruthy ? isValid : isValid === true) {
    return void 0;
  }

  return opt.message;
}

export default invariant;
