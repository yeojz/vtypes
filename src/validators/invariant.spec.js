import validate from 'validate.js';

describe('invariant', function() {
  test('shows default message on error', function() {
    const result = validate(
      { value: 'random' },
      {
        value: {
          invariant: {
            condition: () => false
          }
        }
      }
    );
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value invariant violation');
  });

  test('shows custom message on error', function() {
    const result = validate(
      { value: 'random' },
      {
        value: {
          invariant: {
            condition: () => false,
            message: 'my message'
          }
        }
      }
    );
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value my message');
  });

  test('valid check', function() {
    const result = validate(
      { value: 'random' },
      {
        value: {
          invariant: {
            condition: value => value === 'random'
          }
        }
      }
    );
    expect(result).toBeUndefined();
  });

  test('an object is expected from invariant setting', function() {
    const result = () =>
      validate(
        { value: 'string' },
        {
          value: {
            invariant: true
          }
        }
      );
    expect(result).toThrow(Error);
  });

  test('does not run', function() {
    const result = validate(
      { value: 'string' },
      {
        value: {
          invariant: false
        }
      }
    );
    expect(result).toBeUndefined();
  });

  test('does not check for presence', function() {
    const result = validate(
      {},
      {
        value: {
          invariant: true
        }
      }
    );
    expect(result).toBeUndefined();
  });

  test('disable allow empty', function() {
    const result = validate(
      {},
      {
        value: {
          invariant: {
            allowEmpty: false,
            condition: () => true
          }
        }
      }
    );
    expect(result).toBeUndefined();
  });
});
