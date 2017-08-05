# vtypes-package

> Additional validation rules / contraints for validate.js to address other common data patterns

[![npm package][npm-badge]][npm-link]
[![Build Status][build-badge]][build-link]
[![Coverage Status][codecov-badge]][codecov-link]

- [Overview](#overview)
- [Build Formats](#build-formats)
- [Validators](#validators)
  - [Base](#base)
  - [Immutable](#immutable)
  - [Laravel](#laravel)
- [License](#license)

## Overview

`vtypes` is built on top of `validate.js`, providing additional validation rules for
certain data patterns / data types.

## Build Formats

`vtypes` is available in a variety of builds & module formats.

  -   [vtypes][vtypes]
  -   [vtypes-register][vtypes-register]
  -   [per module format](https://www.npmjs.com/browse/keyword/vtypes-modularized)

## Validators
For more information, do check their individual `README.md` in their respective folders.

**Note**: Those listed as `yes` in the column `Default` will be included
in `vtypes` and `vtypes-register` packages.

### Base

| Validator              | Default | Description                                                     |
| ---------------------- | ------- | --------------------------------------------------------------- |
| [arrayOf][arrayOf]     | yes     | allows recursive validation of an array content                 |
| [array][array]         | yes     | checks for array (empty array is also valid)                    |
| [bool][bool]           | yes     | must be of type boolean                                         |
| [different][different] | yes     | must have a different value than the provided field.            |
| [func][func]           | yes     | must be a type function                                         |
| [invariant][invariant] | yes     | conditional check based on a truthy result of a function        |
| [json][json]           | yes     | must be a valid JSON string.                                    |
| [objectOf][objectOf]   | yes     | object with property values following a certain validation rule |
| [only][only]           | yes     | must be the ONLY ONE present amongst specified attributes       |
| [shape][shape]         | yes     | allows recursive validation of nested object                    |
| [string][string]       | yes     | must be a type string                                           |

### Immutable

| Validator              | Default | Description                                                       |
| ---------------------- | ------- | ----------------------------------------------------------------- |
| [immutable][immutable] | yes     | checks for immutable resource                                     |
| [size][size]           | yes     | same as the built in "length" validator, but uses "size" instead. |

### Laravel

The following validators are inspired from the built-in validation rules of [Laravel](https://laravel.com/docs/5.4/validation#available-validation-rules)

| Validator                                | Default | Description                                                         |
| ---------------------------------------- | ------- | ------------------------------------------------------------------- |
| [requiredIf][requiredIf]                 | yes     | required if the another attribute is present or equal to any value. |
| [requiredUnless][requiredUnless]         | yes     | required unless the another attribute is equal to any value.        |
| [requiredWith][requiredWith]             | yes     | required if ANY of the other specified attributes are present.      |
| [requiredWithAll][requiredWithAll]       | yes     | required if ALL of the other specified attributes are present.      |
| [requiredWithout][requiredWithout]       | yes     | required when ANY of the specified attributes are not present       |
| [requiredWithoutAll][requiredWithoutAll] | yes     | required when ALL of the specified attributes are not present       |

## License

`vtypes` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes

[build-badge]: https://img.shields.io/circleci/project/github/yeojz/vtypes/master.svg?style=flat-square
[build-link]: https://circleci.com/gh/yeojz/vtypes.svg

[codecov-badge]: https://img.shields.io/codecov/c/github/yeojz/vtypes/master.svg?style=flat-square
[codecov-link]: https://codecov.io/gh/yeojz/vtypes

[vtypes]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes
[vtypes-register]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-register

[array]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-array
[arrayOf]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-arrayof
[bool]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-bool
[func]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-func
[invariant]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-invariant
[objectOf]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-objectof
[only]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-only
[shape]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-shape
[string]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-string
[immutable]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-immutable
[size]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-size
[different]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-different
[json]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-json
[requiredIf]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredif
[requiredUnless]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredunless
[requiredWith]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredwith
[requiredWithAll]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredwithall
[requiredWithout]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredwithout
[requiredWithoutAll]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredwithoutall

[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
