import validate from 'validate.js';
import shape from './shape';

validate.extend(validate.validators, {shape});

describe('shape', function() {

  const createValue = (value) => ({
    value
  });

  const createCheck = (opt) => ({
    value: {
      shape: opt
    }
  });

  const defaultCheckObject = {
    a: {
      presence: true,
      length: {is: 3}
    },
    b: {
      presence: true,
      length: {is: 3}
    }
  }

  test('does not check for presence', function() {
    const result = validate({}, createCheck(true));
    expect(result).toBeUndefined();
  });

  test('does not run', function() {
    const result = validate(createValue('random'), createCheck(false));
    expect(result).toBeUndefined();
  });

  test('ensures that "values" field is available in configuration', function () {
    const result = validate(createValue('random'), createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual({_message: 'Value is not of type object'});
  });

  test('incorrect non-object value', function () {
    const result = validate(createValue('random'), createCheck({
      values: defaultCheckObject
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual({_message: 'Value is not of type object'});
  });

  test('incorrect object value', function () {
    const value = {
      b: 't2'
    }

    const result = validate(createValue(value), createCheck({
      values: defaultCheckObject
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual({
      _message: '^One or more object values for value is not valid',
      a: [
        'A can\'t be blank'
      ],
      b: [
        'B is the wrong length (should be 3 characters)'
      ]
    });
  });

  test('correct object value', function () {
    const value = {
      a: 't11',
      b: 't21'
    }

    const result = validate(createValue(value), createCheck({
      values: defaultCheckObject
    }));

    expect(result).toBeUndefined();
  });
});