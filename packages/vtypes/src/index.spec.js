import vtypes from './index';
import pkglist from '../../../pkglist';

describe('vtypes', function() {
  test('export count', function() {
    const omitted = [
      'vtypes',
      'vtypes-register',
      'vtypes-utils',
    ];

    let exported = Object.keys(vtypes)
      .map((v) => 'vtypes-' + v.toLowerCase());

    exported.push(...omitted);

    expect(exported.sort()).toEqual(pkglist.packages.sort());
  });
});
