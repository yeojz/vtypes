import invariant from './invariant';

function create(condition, message) {
  const defaultOptions = {
    allowNil: true,
    message
  }

  function validator(value, options, key, attributes) {
    const opt = Object.assign(defaultOptions, options, {condition});
    return invariant(value, opt, key, attributes);
  }

  return validator;
}

export default create;
