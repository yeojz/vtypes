import invariant from 'vtypes-invariant';

export default invariant.create(
  value => typeof value === 'string',
  'must be of type string'
);
