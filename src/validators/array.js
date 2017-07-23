import createInvariantType from './createInvariantType';

export default createInvariantType(
  value => Array.isArray(value),
  'must be of type array'
);
