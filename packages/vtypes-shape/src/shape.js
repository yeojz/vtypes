import validate from 'validate.js';
import {prettify} from 'vtypes-utils';

function shape(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      formatter: (v) => v,
      message: `^One or more object values for ${key} is not valid`,
      messageKey: '_message',
      notObject: '%{attribute} is not of type object'
    },
    options
  )

  if (typeof opt.values !== 'object') {
    validate.error(`Attribute ${key} has a non-object defined as it's "values" option`);
  }

  if (typeof opt.values !== 'object' || typeof value !== 'object') {
    return opt.formatter({
      [opt.messageKey]: prettify(opt.notObject, key)
    });
  }

  const result = validate(value, opt.values);

  if (!validate.isDefined(result)) {
    return void 0;
  }

  result[opt.messageKey] = prettify(opt.message, key);
  return opt.formatter(result);
}

export default shape;
