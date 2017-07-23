import createInvariantType from './createInvariantType';

export default createInvariantType(
  value => {
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      return false;
    }
  },
  'is expected to be a valid JSON string'
);
