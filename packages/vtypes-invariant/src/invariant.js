import validate from 'validate.js';

function invariant(value, options, key, attributes) {
  const opt = Object.assign(
    {
      allowNil: true,
      message: 'invariant violation'
    },
    this.options,
    options
  );

  if (!validate.isDefined(value) && opt.allowNil) {
    return void 0;
  }

  if (typeof opt.condition !== 'function') {
    validate.error(`Attribute ${key} has a non-function as a condition`);
    return 'has an invalid validator';
  }

  if (opt.condition(value, key, attributes)) {
    return void 0;
  }

  return opt.message;
}

export default invariant;
