import validate from 'validate.js';
import arrayOf from './arrayOf';

validate.extend(validate.validators, {arrayOf});

describe('arrayOf', function() {

  const createValue = (value) => ({
    value
  });

  const createCheck = (opt) => ({
    value: {
      arrayOf: opt
    }
  });

  const defaultCheckObject = {
    presence: true,
    length: {is: 3}
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
    expect(result.value[0]).toEqual({_message: 'Value is not of type array'});
  });

  test('incorrect non-array value', function () {
    const result = validate(createValue('random'), createCheck({
      contains: defaultCheckObject
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual({
      _message: 'Value is not of type array'
    });
  });

  test('incorrect array value', function () {
    const value = [
      '',
      't2',
      't31'
    ];

    const result = validate(createValue(value), createCheck({
      contains: defaultCheckObject
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual({
      '0': [
        'Value[0] can\'t be blank',
        'Value[0] is the wrong length (should be 3 characters)'
      ],
      '1': ['Value[1] is the wrong length (should be 3 characters)'],
      _message: '^One or more array values for value is not valid'
    });
  });

  test('custom formatter', function () {
    const value = [
      't1'
    ];

    const result = validate(createValue(value), createCheck({
      formatter: (v) => v._message,
      contains: defaultCheckObject
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('One or more array values for value is not valid');
  });

  test('correct array value', function () {
    const value = [
      't11',
      't21',
    ];

    const result = validate(createValue(value), createCheck({
      contains: defaultCheckObject
    }));
    expect(result).toBeUndefined();
  });
});
