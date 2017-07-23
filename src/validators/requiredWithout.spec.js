import validate from 'validate.js';

describe('requiredWithout', function() {
  test('returns error when keys is not an array', function() {
    const result = () => validate(
      { value: 'random' },
      {
        value: {
          requiredWithout: {
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
          requiredWithout: {
            attributes: ['key1', 'key2']
          }
        },
        key2: {
          requiredWithout: {
            attributes: ['key1', 'key2']
          }
        }
      }
    );
    expect(result.key1).toHaveLength(1);
    expect(result.key2).toHaveLength(1);

    expect(result.key1[0]).toBe(
      'One of the following attributes is required (key1, key2)'
    );
    expect(result.key2[0]).toBe(
      'One of the following attributes is required (key1, key2)'
    );
  });

  test('returns errors when values are empty strings', function() {
    const result = validate(
      { key1: '' },
      {
        key1: {
          requiredWithout: {
            useTruthy: true,
            attributes: ['key1']
          }
        }
      }
    );
    expect(result.key1).toHaveLength(1);
    expect(result.key1[0]).toBe(
      'One of the following attributes is required (key1)'
    );
  });

  test('does not error when values are empty strings', function() {
    const result = validate(
      { key1: '' },
      {
        key1: {
          requiredWithout: {
            attributes: ['key1']
          }
        }
      }
    );
    expect(result).toBeUndefined();
  });
});
