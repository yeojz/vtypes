import validate from 'validate.js';

function arrayOf(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      formatter: (v) => v,
      message: `^One or more array values for ${key} is not valid`,
      messageKey: '_message',
      notArray: 'is not of type array'
    },
    this.options,
    options
  );

  if (typeof opt.values !== 'object') {
    validate.error(`Attribute ${key} has a non-object defined as it's "values" option`);
    return 'has an invalid validator';
  }

  if (!Array.isArray(value)) {
    return opt.formatter({
      [opt.messageKey]: opt.notArray
    });
  }

  let result = value.reduce((obj, entry, idx) => {
    const err = validate.single(entry, opt.values);
    if (validate.isDefined(err)) {
      obj[idx] = err;
    }
    return obj;
  }, {});

  if (Object.keys(result) < 1) {
    return void 0;
  }

  result[opt.messageKey] = opt.message;
  return opt.formatter(result);
}

export default arrayOf;
