import validate from 'validate.js';
import requiredUnless from './requiredUnless';

validate.extend(validate.validators, {requiredUnless});

describe('requiredUnless', function() {
  const createCheck = (opt) => ({
    value: {
      requiredUnless: opt
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

  test('no attribute value defined, condition true', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other'
    }));
    expect(result).toBeUndefined();
  });

  test('no object', function() {
    const result = validate({}, createCheck({
      attribute: 'other'
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is not present with *');
  });

  test('has value, no attribute value defined, condition true', function() {
    const result = validate(createValue('random', 'foo'), createCheck({
      attribute: 'other',
    }));

    expect(result).toBeUndefined();
  });


  test('no attribute value defined, condition false', function() {
    const result = validate(createValue(void 0, void 0), createCheck({
      attribute: 'other',
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is not present with *');
  });

  test('attribute value defined, condition true', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other',
      attributeValue: 'bar'
    }));
    expect(result).toBeUndefined();
  });

  test('attribute value defined, condition false', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other',
      attributeValue: 'foo'
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is not present with foo');
  });

  test('when truthy, condition false', function() {
    const result = validate(createValue(void 0, 0), createCheck({
      truthy: true,
      attribute: 'other'
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is not present with *');
  });

  test('when truthy, condition true', function() {
    const result = validate(createValue(void 0, 1), createCheck({
      truthy: true,
      attribute: 'other'
    }));

    expect(result).toBeUndefined();
  });

  test('custom comparator, condition true', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other',
      comparator: () => true
    }));
    expect(result).toBeUndefined();
  });

  test('custom comparator, condition false', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attribute: 'other',
      comparator: () => false
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is not present with *');
  });

  test('allow symbol for any to be changed', function() {
    const result = validate(createValue(void 0, void 0), createCheck({
      attribute: 'other',
      symbolForAny: 'any'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is required when other is not present with any');
  });
});
