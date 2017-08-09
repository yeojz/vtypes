import validate from 'validate.js';
import bool from './bool';

validate.extend(validate.validators, {bool});

describe('bool', function() {

  const createValue = (value) => ({
    value
  });

  const createCheck = (opt) => ({
    value: {
      bool: opt
    }
  });

  test('does not defaultCheck for presence', function() {
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
    expect(result.value[0]).toBe('Value must be of type boolean');
  });

  test('takes in false values', function() {
    const result = validate(createValue(false), createCheck(true));
    expect(result).toBeUndefined();
  });

  test('takes in true values', function() {
    const result = validate(createValue(true), createCheck(true));
    expect(result).toBeUndefined();
  });
});
