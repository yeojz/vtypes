import createInvariantType from './createInvariantType';

export default createInvariantType(
  value => typeof value === 'function',
  'must be of type function'
);
