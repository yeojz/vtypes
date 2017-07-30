import validate from 'validate.js';

describe('different', function() {
  const check = {
    value: {
      different: 'other'
    }
  };

  test('correct type', function() {
    const result = validate(
      {
        value: 100,
        other: 200
      },
      check
    );
    expect(result).toBeUndefined();
  });

  test('incorrect type', function() {
    const result = validate(
      {
        value: 100,
        other: 100
      },
      check
    );
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value is not different from other');
  });

  test('return custom message', function() {
    const result = validate(
      {
        value: 100,
        other: 100
      },
      {
        value: {
          different: {
            attribute: 'other',
            message: 'has the same content'
          }
        }
      }
    );
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value has the same content');
  });
});
