import invariant from './invariant';

function create(condition, message) {
  function validator(value, options, key, attributes) {
    const opt = Object.assign({message}, this.options, options, {condition});
    return invariant(value, opt, key, attributes);
  }

  return validator;
}

export default create;
