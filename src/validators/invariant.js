import validate from 'validate.js';

function invariant(value, options, key) {
  const opt = Object.assign({}, {
    allowEmpty: true,
    message: 'invariant violation'
  }, options);

  if (!validate.isDefined(value) && opt.allowEmpty) {
    return void 0;
  }

  if (typeof opt.condition !== 'function') {
    throw new Error(`The "condition" option for ${key} should be a function`);
  }

  if (opt.condition(value, opt)) {
    return void 0;
  }

  return opt.message
}

export default invariant;
