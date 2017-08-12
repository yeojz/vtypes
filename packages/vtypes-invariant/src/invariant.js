import validate from 'validate.js';

function invariant(value, options, key, attributes) {
  const opt = Object.assign(
    {
      presence: true,
      truthy: false,
      message: 'invariant violation',
      notValidator: 'has an invalid validator'
    },
    options
  );

  if (!validate.isDefined(value) && !opt.presence) {
    return void 0;
  }

  if (typeof opt.condition !== 'function') {
    validate.error(`Attribute ${key} has a non-function as a condition`);
    return opt.notValidator;
  }

  const isValid = opt.condition(value, key, attributes);
  if (opt.truthy ? isValid : isValid === true) {
    return void 0;
  }

  return opt.message;
}

export default invariant;
