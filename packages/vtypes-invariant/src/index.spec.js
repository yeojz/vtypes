import index from './index';
import invariant from './invariant';

jest.mock('./invariant');

describe('index', function() {
  test('create function is available', function () {
    expect(typeof index.create).toEqual('function');
  });

  test('calls invariant with arguments passed through', function () {
    index('v1', 'v2', 'v3', 'v4');
    expect(invariant).toBeCalledWith('v1', 'v2', 'v3', 'v4');
  });
});
