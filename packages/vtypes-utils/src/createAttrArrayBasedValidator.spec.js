import createAttrArrayBasedValidator from './createAttrArrayBasedValidator';

describe('createAttrArrayBasedValidator', function() {
  test('should return a function', function() {
    const result = createAttrArrayBasedValidator();
    expect(typeof result).toEqual('function')
  });
});
