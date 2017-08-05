import validate from 'validate.js';
import Immutable from 'immutable';
import immutable from './immutable';

validate.extend(validate.validators, {immutable});

describe('immutable', function() {

  const createValue = (value) => ({
    value,
  });

  const createCheck = (opt) => ({
    value: {
      immutable: opt
    }
  });

  test('does not check for presence', function() {
    const result = validate({}, createCheck(true));
    expect(result).toBeUndefined();
  });

  test('does not run', function() {
    const result = validate(createValue('random'), createCheck(false));
    expect(result).toBeUndefined();
  });

  test('no library - incorrect value', function() {
    const result = validate(createValue('random'), createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value is not an immutable value');
  });

  test('no library - correct value', function() {
    const result = validate(createValue(new Immutable.List()), createCheck(true));
    expect(result).toBeUndefined();
  });

  test('with library - incorrect value (invalid type)', function() {
    const result = validate(createValue('random'), createCheck({
      library: Immutable,
      type: 'default-custom'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value is not an immutable default-custom');
  });

  test('with library - incorrect value (valid type)', function() {
    const result = validate(createValue('random'), createCheck({
      library: Immutable,
      type: 'List'
    }));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value is not an immutable List');
  });

  test('with library - correct value (valid type)', function() {
    const result = validate(createValue(new Immutable.List()), createCheck({
      library: Immutable,
      type: 'List'
    }));
    expect(result).toBeUndefined();
  });
});
