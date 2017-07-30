import validate from 'validate.js';
import array from './array';

validate.extend(validate.validators, {array});

describe('vtypes-array', function() {
  const check = {
    value: {
      array: true
    }
  };

  test('incorrect type', function() {
    const result = validate({ value: 'random' }, check);
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value must be of type array');
  });

  test('does not run', function() {
    const result = validate({ value: 'random' }, { value: { array: false } });
    expect(result).toBeUndefined();
  });

  test('correct type', function() {
    const result = validate({ value: [] }, check);
    expect(result).toBeUndefined();
  });

  test('does not check for presence', function() {
    const result = validate({}, check);
    expect(result).toBeUndefined();
  });
});
