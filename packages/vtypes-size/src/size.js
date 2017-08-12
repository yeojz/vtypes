import validate from 'validate.js';

function size(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      is: void 0,
      maximum: void 0,
      minimum: void 0,
      message: void 0,
      noSize: 'has no size specified',
      tooLong: 'is too long (maximum is %{count})',
      tooShort: 'is too short (minimum is %{count})',
      wrongSize: 'is the wrong size (should be %{count})',
    },
    options
  );

  let errors = [];
  const size = value.size;

  if (!validate.isNumber(size)) {
    validate.error(`Attribute ${key} has a non numeric value for 'size'`);
    return opt.message || opt.noSize;
  }

  if (validate.isNumber(opt.is) && size !== opt.is) {
    errors.push(
      validate.format(opt.wrongSize, {
        count: opt.is
      })
    );
  }

  if (validate.isNumber(opt.minimum) && size < opt.minimum) {
    errors.push(
      validate.format(opt.tooShort, {
        count: opt.minimum
      })
    );
  }

  if (validate.isNumber(opt.maximum) && size > opt.maximum) {
    errors.push(
      validate.format(opt.tooLong, {
        count: opt.maximum
      })
    );
  }

  if (errors.length < 1) {
    return void 0;
  }

  return options.message || errors;
}

export default size;
