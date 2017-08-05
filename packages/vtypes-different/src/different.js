import validate from 'validate.js';

function comparator(v1, v2) {
  return v1 !== v2;
}

function different(value, options, key, attributes, globalOptions) {

  if (typeof options === 'string') {
    options = {attribute: options};
  }

  const opt = Object.assign(
    {
      comparator,
      message: 'is not different from %{attribute}'
    },
    options
  );

  return validate.validators.equality(value, opt, key, attributes, globalOptions);
}

export default different;
