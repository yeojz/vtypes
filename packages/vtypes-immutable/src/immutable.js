import validate from 'validate.js';

function immutable(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      message: 'is not an immutable %{type}',
      library: void 0,
      type: void 0,
    },
    options
  );

  const type = opt.type;

  if (type && opt.library) {
    try {
      const isValid = opt.library[type]['is' + type](value);
      return isValid ? void 0 : validate.format(opt.message, {type});

    } catch (e) {
      validate.error(`Attribute ${key} is referencing a library with no "${type}.is${type}" validator`);
      return validate.format(opt.message, {type});
    }
  }

  if (
    typeof value.toJS === 'function'
    || typeof value.toJSON === 'function'
    || typeof value.toArray === 'function'
    || typeof value.toObject === 'function'
  ) {
    return void 0;
  }

  return validate.format(opt.message, {type: 'value'});
}

export default immutable;
