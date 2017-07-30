import validate from 'validate.js';

function objectOf(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      formatter: (v) => v,
      message: `^One or more object values for ${key} is not valid`,
      messageKey: '_message',
      notObject: 'is not of type object'
    },
    options
  )

  if (typeof opt.values !== 'object') {
    validate.error(`Attribute ${key} has a non-object defined as it's "values" option`);
    return 'has an invalid validator';
  }

  if (typeof value !== 'object') {
    return opt.formatter({
      [opt.messageKey]: opt.notObject
    });
  }

  const keys = Object.keys(value);

  let result = keys.reduce((obj, key) => {
    const err = validate.single(value[key], opt.values);

    if (validate.isDefined(err)) {
      obj[key] = err;
    }

    return obj;
  }, {});

  if (Object.keys(result) < 1) {
    return void 0;
  }

  result[opt.messageKey] = opt.message;
  return opt.formatter(result);
}

export default objectOf;
