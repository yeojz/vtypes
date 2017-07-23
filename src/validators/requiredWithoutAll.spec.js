import validate from 'validate.js';
describe('requiredWithoutAll', function() {
  test('returns error when keys is not an array', function() {
    const result = () => validate(
      { value: 'random' },
      {
        value: {
          requiredWithoutAll: {
            attributes: 'test'
          }
        }
      }
    );
    expect(result).toThrow(Error);
  });

  test('returns when keys are not found', function() {
    const result = validate(
      {},
      {
        key1: {
          requiredWithoutAll: {
            attributes: ['key1', 'key2']
          }
        }
      }
    );
    expect(result).toBeUndefined();
  });

  test('should pass when only one key found', function() {
    const result = validate(
      { key1: 'random' },
      {
        key1: {
          requiredWithoutAll: {
            attributes: ['key1', 'key2']
          }
        }
      }
    );
    expect(result).toBeUndefined();
  });

  test('returns error when > 1 keys are found', function() {
    const result = validate(
      {
        key1: 'random1',
        key2: 'random2'
      },
      {
        key1: {
          requiredWithoutAll: {
            attributes: ['key1', 'key2']
          }
        },
        key2: {
          requiredWithoutAll: {
            attributes: ['key1', 'key2']
          }
        }
      }
    );
    expect(result.key1).toHaveLength(1);
    expect(result.key2).toHaveLength(1);

    expect(result.key1[0]).toBe(
      'Only one the following attributes are allowed (key1, key2)'
    );
    expect(result.key2[0]).toBe(
      'Only one the following attributes are allowed (key1, key2)'
    );
  });

  test('returns error without useTruthy', function() {
    const result = validate(
      {
        key1: 0,
        key2: 11
      },
      {
        key1: {
          requiredWithoutAll: {
            attributes: ['key1', 'key2']
          }
        },
        key2: {
          requiredWithoutAll: {
            attributes: ['key1', 'key2']
          }
        }
      }
    );

    expect(result.key1).toHaveLength(1);
    expect(result.key2).toHaveLength(1);

    expect(result.key1[0]).toBe(
      'Only one the following attributes are allowed (key1, key2)'
    );
    expect(result.key2[0]).toBe(
      'Only one the following attributes are allowed (key1, key2)'
    );
  });

  test('should not return with useTruthy', function() {
    const result = validate(
      {
        key1: 0,
        key2: 11
      },
      {
        key1: {
          requiredWithoutAll: {
            useTruthy: true,
            attributes: ['key1', 'key2']
          }
        },
        key2: {
          requiredWithoutAll: {
            useTruthy: true,
            attributes: ['key1', 'key2']
          }
        }
      }
    );
    expect(result).toBeUndefined();
  });
});
