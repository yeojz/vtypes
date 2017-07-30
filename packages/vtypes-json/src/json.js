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
  'is expected to be a valid JSON string'
);
