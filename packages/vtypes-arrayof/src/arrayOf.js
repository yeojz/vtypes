import validate from 'validate.js';
import {prettify} from 'vtypes-utils';

function arrayOf(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      formatter: (v) => v,
      message: '^One or more array values for %{key} is not valid',
      messageKey: '_message',
      notArray: '%{key} is not of type array'
    },
    options
  );

  if (typeof opt.contains !== 'object') {
    validate.error(`Attribute ${key} has a non-object defined as it's "values" option`);
  }

  if (typeof opt.contains !== 'object' || !Array.isArray(value)) {
    return opt.formatter({
      [opt.messageKey]: prettify(opt.notArray, key, {}, {capitalize: true})
    });
  }

  let result = value.reduce((accum, entry, idx) => {
    const entryKey = `${key}[${idx}]`;
    const err = validate({
      [entryKey]: entry
    }, {
      [entryKey]: opt.contains
    });

    if (validate.isDefined(err)) {
      accum[idx + ''] = err[entryKey];
    }

    return accum;
  }, {});

  if (Object.keys(result).length < 1) {
    return void 0;
  }

  result[opt.messageKey] = prettify(opt.message, key, {}, {capitalize: true})
  return opt.formatter(result);
}

export default arrayOf;
