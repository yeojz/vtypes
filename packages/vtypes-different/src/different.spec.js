import validate from 'validate.js';
import different from './different';

validate.extend(validate.validators, {different});

describe('different', function() {

  const createValue = (value, other) => ({
    value,
    other
  })

  const createCheck = (opt) => ({
    value: {
      different: opt
    }
  });

  test('correct type', function() {
    const result = validate(createValue(100, 200), createCheck('other'));
    expect(result).toBeUndefined();
  });

  test('incorrect type', function() {
    const result = validate(createValue(100, 100), createCheck('other'));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value is not different from other');
  });

  test('return custom message', function() {
    const result = validate(createValue(100, 100), createCheck({
      attribute: 'other',
      message: 'has the same content'
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value has the same content');
  });
});
