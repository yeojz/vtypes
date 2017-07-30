import validate from 'validate.js';

describe('bool', function() {
  const check = {
    value: {
      bool: true
    }
  };

  test('incorrect type', function() {
    const result = validate({ value: 'random' }, check);
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value must be of type boolean');
  });

  test('takes in false values', function() {
    const result = validate({ value: false }, check);
    expect(result).toBeUndefined();
  });

  test('takes in true values', function() {
    const result = validate({ value: true }, check);
    expect(result).toBeUndefined();
  });

  test('does not check for presence', function() {
    const result = validate({}, check);
    expect(result).toBeUndefined();
  });
});
