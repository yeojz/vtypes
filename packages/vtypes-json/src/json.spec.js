import validate from 'validate.js';

describe('different', function() {
  const check = {
    value: {
      json: true
    }
  };

  test('correct type', function() {
    const result = validate({ value: '{"test": "me"}' }, check);
    expect(result).toBeUndefined();
  });

  test('incorrect type', function() {
    const result = validate({ value: 'test: "me"' }, check);
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value is expected to be a valid JSON string');
  });

  test('return custom message', function() {
    const result = validate({ value: 'test: "me"' }, { value: { json: { message: 'error' } } });
    expect(result.value).toHaveLength(1);
    expect(result.value[0]).toBe('Value error');
  });
});
