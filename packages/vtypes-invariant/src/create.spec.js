import create from './create';
import invariant from './invariant';

jest.mock('./invariant');

describe('create', function() {
  test('returns a function', function () {
    expect(typeof create()).toBe('function');
  });

  test('calls invariant with condition and message set', function () {
    const condition = jest.fn();
    const validator = create(condition, 'my message');

    validator('test', {}, 'value', {});

    expect(invariant).toBeCalledWith(
      'test',
      {
        allowNil: true,
        condition,
        message: 'my message'
      },
      'value',
      {}
    );

  })
});
