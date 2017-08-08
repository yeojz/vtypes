import validate from 'validate.js';
import only from './only';

validate.extend(validate.validators, {only});

describe('only', function() {

  const createValue = (value, ...args) => Object.assign({value}, ...args);

  const createCheck = (opt) => ({
    value: {
      only: opt
    }
  });


  test('does not run', function() {
    const result = validate(createValue('random'), createCheck(false));
    expect(result).toBeUndefined();
  });

  test('attribute must be configured', function() {
    const result = validate({}, createCheck(true));
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toEqual('Value has an invalid validator');
  });

});
