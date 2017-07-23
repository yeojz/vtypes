import createInvariantType from './createInvariantType';

export default createInvariantType(
  value => typeof value === 'boolean',
  'must be of type boolean'
);
