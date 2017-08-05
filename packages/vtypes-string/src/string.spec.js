import validate from 'validate.js';
import string from './string';

validate.extend(validate.validators, {string});

describe('string', function() {

  const createValue = (value) => ({
    value
  });

  const createCheck = (opt) => ({
    value: {
      string: opt
    }
  });

  test('does not check for presence', function() {
    const result = validate({}, createCheck(true));
    expect(result).toBeUndefined();
  });

  test('does not run', function() {
    const result = validate(createValue('random'), createCheck(false));
    expect(result).toBeUndefined();
  });

  test('incorrect type', function() {
    const result = validate(createValue(100), createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value must be of type string');
  });

  test('correct type', function() {
    const result = validate(createValue('random'), createCheck(true));
    expect(result).toBeUndefined();
  });
});
