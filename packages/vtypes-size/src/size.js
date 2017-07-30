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
      message: 'has an incorrect size',
      tooLong: 'is too long (maximum is %{count} characters)',
      tooShort: 'is too short (minimum is %{count} characters)',
      wrongLength: 'is the wrong length (should be %{count} characters)',
    },
    options
  );

  let errors = [];
  const length = value.size;

  if (!validate.isNumber(length)) {
    validate.error(`Attribute ${key} has a non numeric value for 'length'`);
    return opt.message || 'has an invalid validator';
  }

  if (validate.isNumber(opt.is) && length !== opt.is) {
    errors.push(
      validate.format(options.wrongLength, {
        count: opt.is
      })
    );
  }

  if (validate.isNumber(opt.minimum) && length < opt.minimum) {
    errors.push(
      validate.format(options.tooShort, {
        count: opt.minimum
      })
    );
  }

  if (validate.isNumber(opt.maximum) && length > opt.maximum) {
    errors.push(
      validate.format(options.tooLong, {
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
