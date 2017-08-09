import validate from 'validate.js';
import only from './only';

validate.extend(validate.validators, {only});

describe('only', function() {
  const createCheck = (opt) => ({
    value: {
      only: opt
    }
  });

  const attributes = ['v2', 'v3'];

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

  test('should skip when current value is nil', function () {
    const obj = {
      value: null,
      v2: 'foo'
    }
    const result = validate(obj, createCheck({attributes}));
    expect(result).toBeUndefined();
  });

  test('should skip falsy value when using truthy', function () {
    const obj = {
      value: false,
      v2: 'foo'
    }
    const result = validate(obj, createCheck({
      allowTruthy: true,
      attributes
    }));
    expect(result).toBeUndefined();
  });


  test('incorrect value', function () {
    const obj = {
      value: true,
      v2: 0
    }
    const result = validate(obj, createCheck({
      attributes
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value must be the only key with value present. Other attributes (v2, v3) should not be present');
  });

  test('incorrect value when using truthy', function () {
    const obj = {
      value: true,
      v2: 0
    }
    const result = validate(obj, createCheck({
      allowTruthy: true,
      attributes
    }));
    expect(result).toBeUndefined();
  });
});
