import validate from 'validate.js';
import requiredIf from './requiredIf';

validate.extend(validate.validators, {requiredIf});

describe('requiredIf', function() {
  const createCheck = (opt) => ({
    value: {
      requiredIf: opt
    }
  });

  const createValue = (value, other) => ({
    value,
    other
  })

  test('does not run', function() {
    const obj = {
      value: 'foo'
    }

    const result = validate(obj, createCheck(false));
    expect(result).toBeUndefined();
  });

  test('attribute must be configured', function() {
    const result = validate({}, createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value has an invalid validator');
  });

  test('incorrect input, no attribute value defined', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is present with *');
  });

  test('incorrect input, attribute value defined', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other',
      attributeValue: 'bar'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is present with bar');
  });

  test('correct input, when attribute is nil', function() {
    const result = validate(createValue(void 0, null), createCheck({
      attribute: 'other'
    }));
    expect(result).toBeUndefined();
  });

  test('correct input, attribute value defined, and condition true', function() {
    const result = validate(createValue('foo', 'bar'), createCheck({
      attribute: 'other',
      attributeValue: 'bar'
    }));
    expect(result).toBeUndefined();
  });

  test('correct input, attribute value defined, and condition false', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other',
      attributeValue: 'foo'
    }));
    expect(result).toBeUndefined();
  });

  test('incorrect input, custom comparator', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other',
      comparator: () => true
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is present with *');
  });

  test('correct input, custom comparator', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other',
      comparator: () => false
    }));
    expect(result).toBeUndefined();
  });

  test('incorrect input, when not truthy', function() {
    const result = validate(createValue(void 0, 0), createCheck({
      attribute: 'other'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is present with *');
  });

  test('correct input, when truthy', function() {
    const result = validate(createValue(void 0, 0), createCheck({
      allowTruthy: true,
      attribute: 'other'
    }));
    expect(result).toBeUndefined();
  });

  test('incorrect input, when truthy', function() {
    const result = validate(createValue(void 0, 1), createCheck({
      allowTruthy: true,
      attribute: 'other'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is present with *');
  });

  test('allow symbol for any to be changed', function() {
    const result = validate(createValue(void 0, 0), createCheck({
      attribute: 'other',
      symbolForAny: 'any'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is present with any');
  });
});
