import prettify from './prettify';

describe('prettify', function() {

  test('should replace key', function() {
    const result = prettify('%{key}', 'test');
    expect(result).toEqual('test');
  });

  test('should capitalize', function() {
    const result = prettify('test', '', {}, {
      capitalize: true
    });
    expect(result).toEqual('Test');
  });
});
