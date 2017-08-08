import validate from 'validate.js';

function prettify(message, key, others = {}, opt = {}) {
  let value = validate.format(message, Object.assign({
    key: validate.prettify(key)
  }, others));

  if (opt.capitalize) {
    value = validate.capitalize(value);
  }

  return value;
}

export default prettify;
