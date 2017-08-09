import validate from 'validate.js';
import array from './array';

validate.extend(validate.validators, {array});

describe('array', function() {

  const createValue = (value) => ({
    value
  });

  const createCheck = (opt) => ({
    value: {
      array: opt
    }
  });

  test('does not check for presence', function() {
    const result = validate({}, createCheck(true));
    expect(result).toBeUndefined();
  });

  test('does not run', function() {
    const result = validate(createValue('foo'), createCheck(false));
    expect(result).toBeUndefined();
  });

  test('incorrect type', function() {
    const result = validate(createValue('foo'), createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value must be of type array');
  });

  test('correct type', function() {
    const result = validate(createValue([]), createCheck(true));
    expect(result).toBeUndefined();
  });
});
