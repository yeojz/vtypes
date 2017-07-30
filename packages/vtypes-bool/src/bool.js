import invariant from 'vtypes-invariant';

export default invariant.create(
  value => typeof value === 'boolean',
  'must be of type boolean'
);
