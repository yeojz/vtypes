import validate from 'validate.js';
import {prettify} from 'vtypes-utils';

function objectOf(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      formatter: (v) => v,
      message: '^One or more object values for %{attribute} is not valid',
      messageKey: '_message',
      notObject: '%{attribute} is not of type object'
    },
    options
  )

  if (typeof opt.contains !== 'object') {
    validate.error(`Attribute ${key} has a non-object defined as it's "values" option`);
  }

  if (typeof opt.contains !== 'object' || typeof value !== 'object') {
    return opt.formatter({
      [opt.messageKey]: prettify(opt.notObject, key)
    });
  }

  const objectKeys = Object.keys(value);

  let result = objectKeys.reduce((accum, entryKey) => {
    const err = validate({
      [entryKey]: value[entryKey]
    }, {
      [entryKey]: opt.contains
    });

    if (validate.isDefined(err)) {
      accum[entryKey] = err[entryKey];
    }

    return accum;
  }, {});


  if (Object.keys(result).length < 1) {
    return void 0;
  }

  result[opt.messageKey] = prettify(opt.message, key);
  return opt.formatter(result);
}

export default objectOf;
