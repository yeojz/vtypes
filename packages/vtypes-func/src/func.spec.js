import validate from 'validate.js';
import func from './func';

validate.extend(validate.validators, {func});
describe('func', function() {

  const createValue = (value) => ({
    value,
  });

  const createCheck = (opt) => ({
    value: {
      func: opt
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

  test('incorrect type', function() {
    const result = validate(createValue('foo'), createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value must be of type function');
  });

  test('correct type', function() {
    const result = validate(createValue(() => {}), createCheck(true));
    expect(result).toBeUndefined();
  });
});
