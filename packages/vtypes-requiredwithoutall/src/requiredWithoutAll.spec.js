import validate from 'validate.js';
import requiredWithoutAll from './requiredWithoutAll';

validate.extend(validate.validators, {requiredWithoutAll});

describe('requiredWithoutAll', function() {
  const createCheck = (opt) => ({
    value: {
      requiredWithoutAll: opt
    }
  });

  const createValue = (value, other, other2) => ({
    value,
    other,
    other2
  })

  test('does not run', function() {
    const obj = {
      value: 'foo'
    }

    const result = validate(obj, createCheck(false));
    expect(result).toBeUndefined();
  });

  test('attributes must be configured', function() {
    const result = validate({}, createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value has an invalid validator');
  });

  test('attributes must be configured and an Array', function() {
    const result = validate({}, createCheck({
      attributes: 'test'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value has an invalid validator');
  });

  test('no object', function() {
    const result = validate({}, createCheck({
      attributes: ['other']
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value required when all of these attributes (other) are not present');
  });

  test('single attribute, condition true', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attributes: ['other']
    }));
    expect(result).toBeUndefined();
  });

  test('multi attribute, some filled, condition true', function() {
    const result = validate(createValue(void 0, 'bar'), createCheck({
      attributes: ['other', 'other2']
    }));
    expect(result).toBeUndefined();
  });

  test('multi attribute, all filled, condition true', function() {
    const result = validate(createValue(void 0, 'bar', 'foo'), createCheck({
      attributes: ['other', 'other2']
    }));
    expect(result).toBeUndefined();
  });

  test('multi attribute, none filled, condition true', function() {
    const result = validate(createValue(void 0, void 0, void 0), createCheck({
      attributes: ['other', 'other2']
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value required when all of these attributes (other, other2) are not present');
  });

  test('non-truthy, multi attribute, all filled, condition true', function() {
    const result = validate(createValue(void 0, 0, 0), createCheck({
      attributes: ['other', 'other2']
    }));
    expect(result).toBeUndefined();
  });

  test('truthy, multi attribute, all filled, condition false', function() {
    const result = validate(createValue(void 0, 0, 0), createCheck({
      truthy: true,
      attributes: ['other', 'other2']
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value required when all of these attributes (other, other2) are not present');
  });
});
