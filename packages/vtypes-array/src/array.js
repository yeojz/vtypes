import invariant from 'vtypes-invariant';

export default invariant.create(
  value => Array.isArray(value),
  'must be of type array'
);
