import validate from 'validate.js';
import objectOf from './objectOf';

validate.extend(validate.validators, {objectOf});

describe('objectOf', function() {

  const createValue = (value) => ({
    value
  });

  const createCheck = (opt) => ({
    value: {
      objectOf: opt
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
    const result = validate(createValue('foo'), createCheck(false));
    expect(result).toBeUndefined();
  });

  test('ensures that "values" field is available in configuration', function () {
    const result = validate(createValue('foo'), createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual({_message: 'Value is not of type object'});
  });

  test('incorrect non-object value', function () {
    const result = validate(createValue('foo'), createCheck({
      values: defaultCheckObject
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual({_message: 'Value is not of type object'});
  });

  test('incorrect object value', function () {
    const value = {
      a: '',
      b: 't2'
    }

    const result = validate(createValue(value), createCheck({
      contains: defaultCheckObject
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual({
      _message: '^One or more object values for value is not valid',
      a: [
        'A can\'t be blank',
        'A is the wrong length (should be 3 characters)'
      ],
      b: [
        'B is the wrong length (should be 3 characters)'
      ]
    });
  });

  test('incorrect object value (with formatter)', function () {
    const value = {
      a: '',
      b: 't2'
    }

    const result = validate(createValue(value), createCheck({
      formatter: (v) => v._message,
      contains: defaultCheckObject
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('One or more object values for value is not valid');
  });

  test('correct object value', function () {
    const value = {
      a: 't11',
      b: 't21'
    }

    const result = validate(createValue(value), createCheck({
      contains: defaultCheckObject
    }));

    expect(result).toBeUndefined();
  });
});
