import index from './index';
import vtypes from 'vtypes';
import validate from 'validate.js';

jest.mock('validate.js');

describe('vtypes-register', function() {
  test('exports a list of validators', function () {
    expect(index.validators).toEqual(vtypes);
  });

  test('registers validators into validate.js', function () {
    index();
    expect(validate.extend).toBeCalledWith(validate.validators, vtypes);
  });
});
