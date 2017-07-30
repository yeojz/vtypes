import validate from 'validate.js';

function shape(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      formatter: (v) => v,
      messageKey: '_message',
      notObject: 'is not of type object',
    },
    options
  );

  if (typeof opt.values !== 'object') {
    validate.error(`Attribute ${key} has a non-object defined as it's "values" option`);
    return 'has an invalid validator';
  }

  if (typeof value !== 'object') {
    return opt.formatter({
      [opt.messageKey]: opt.notObject
    });
  }

  return opt.formatter(validate(value, opt.values));
}

export default shape;
