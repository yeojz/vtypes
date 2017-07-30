import validate from 'validate.js';

describe('string', function() {
  const check = {
    value: {
      string: true
    }
  };

  test('incorrect type', function() {
    const result = validate({ value: 100 }, check);
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value must be of type string');
  });

  test('does not run', function() {
    const result = validate(
      { value: 'random' },
      {
        value: {
          string: false
        }
      }
    );
    expect(result).toBeUndefined();
  });

  test('correct type', function() {
    const result = validate({ value: 'random' }, check);
    expect(result).toBeUndefined();
  });

  test('does not check for presence', function() {
    const result = validate({}, check);
    expect(result).toBeUndefined();
  });
});
