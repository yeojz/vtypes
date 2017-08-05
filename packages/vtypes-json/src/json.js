import invariant from 'vtypes-invariant';

function jsonInvariant(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
}

export default invariant.create(
  jsonInvariant,
  'must be a valid JSON string'
);
