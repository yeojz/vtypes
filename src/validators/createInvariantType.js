import invariant from './invariant';
function createInvariantType(condition, message) {
  function invariantType(value, options, key){
    const opt = Object.assign({}, {
      message,
      condition
    }, options);

    return invariant(value, opt, key);
  }

  return invariantType;
}

export default createInvariantType;
