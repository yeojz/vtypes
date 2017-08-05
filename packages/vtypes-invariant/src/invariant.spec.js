import validate from 'validate.js';
import invariant from './invariant';

validate.extend(validate.validators, {invariant});
describe('invariant', function() {

  const createValue = (value) => ({
    value
  });

  const createCheck = (opt) => ({
    value: {
      invariant: opt
    }
  });

  test('allow nil = does not check for presence', function() {
    const result = validate({}, createCheck({
      allowNil: true
    }));

    expect(result).toBeUndefined();
  });

  test('always run + an object is expected from invariant setting', function() {
    const result = validate({}, createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value has an invalid validator');
  });

  test('does not run', function() {
    const result = validate(createValue('random'), createCheck(false));
    expect(result).toBeUndefined();
  });

  test('shows default message on error', function() {
    const result = validate(createValue('random'), createCheck({
      condition: () => false
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value invariant violation');
  });
  test('disallow truthy values by default', function() {
    const result = validate(createValue('random'), createCheck({
      condition: () => 'string'
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value invariant violation');
  });

  test('explicity allow truthy values', function() {
    const result = validate(createValue('random'), createCheck({
      allowTruthy: true,
      condition: () => 'string'
    }));

    expect(result).toBeUndefined();
  });

  test('shows custom message on error', function() {
    const result = validate(createValue('random'), createCheck({
      condition: () => false,
      message: 'my message'
    }));

    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value my message');
  });

  test('valid check', function() {
    const result = validate(createValue('random'), createCheck({
      condition: value => value === 'random'
    }));

    expect(result).toBeUndefined();
  });
});
