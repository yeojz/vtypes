import createAttrBasedValidator from './createAttrBasedValidator';

describe('createAttrBasedValidator', function() {
  test('should return a function', function() {
    const result = createAttrBasedValidator();
    expect(typeof result).toEqual('function')
  });
});
