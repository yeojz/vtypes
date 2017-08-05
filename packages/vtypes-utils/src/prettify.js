import validate from 'validate.js';

function prettify(message, key, others = {}) {
  return validate.capitalize(
    validate.format(message, Object.assign({
      attribute: validate.prettify(key)
    }, others)
  ));
}

export default prettify;
