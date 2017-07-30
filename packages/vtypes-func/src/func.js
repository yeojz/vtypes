import invariant from 'vtypes-invariant';

export default invariant.create(
  value => typeof value === 'function',
  'must be of type function'
);
