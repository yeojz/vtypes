import createInvariantType from './createInvariantType';

export default createInvariantType(
  value => typeof value === 'string',
  'must be of type string'
);
