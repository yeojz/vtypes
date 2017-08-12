import validate from 'validate.js';
import {List} from 'immutable';
import size from './size';

validate.extend(validate.validators, {size});

describe('size', function() {

  const createValue = (value) => ({
    value
  });

  const createCheck = (opt) => ({
    value: {
      size: opt
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

  test('does not have size property', function() {
    const result = validate(createValue('foo'), createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value has no size specified');
  });

  test('wrong size', function () {
    const value = new List([])
    const result = validate(createValue(value), createCheck({is: 1}));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is the wrong size (should be 1)');
  });

  test('too short', function () {
    const value = new List([])
    const result = validate(createValue(value), createCheck({minimum: 1}));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is too short (minimum is 1)');
  });

  test('too long', function () {
    const value = new List([1, 2])
    const result = validate(createValue(value), createCheck({maximum: 1}));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value is too long (maximum is 1)');
  });

  test('correct size', function () {
    const value = new List([1])
    const result = validate(createValue(value), createCheck({is: 1}));
    expect(result).toBeUndefined();
  });

  test('wrong size, custom message', function () {
    const value = new List([])
    const result = validate(createValue(value), createCheck({is: 1, message: '^Custom'}));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Custom');
  });
});
