import validate from 'validate.js';
import json from './json';

validate.extend(validate.validators, {json});

describe('different', function() {
  const defaultValue = { value: '{"test": "me"}' };

  const createCheck = (opt) => ({
    value: {
      json: opt
    }
  });

  test('does not check for presence', function() {
    const result = validate({}, createCheck(true));
    expect(result).toBeUndefined();
  });

  test('does not run', function() {
    const result = validate(defaultValue, createCheck(false));
    expect(result).toBeUndefined();
  });

  test('correct type', function() {
    const result = validate(defaultValue, createCheck(true));
    expect(result).toBeUndefined();
  });

  test('incorrect type', function() {
    const result = validate({value: ''}, createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value must be a valid JSON string');
  });

  test('return custom message', function() {
    const result = validate({value: ''}, { value: { json: { message: 'error' } } });
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value error');
  });
});
