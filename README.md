# vtypes

> Additional rules / contraints for validate.js to address other common data patterns

[![npm package][npm-badge]][npm-link]
[![Build Status][build-badge]][build-link]
[![Coverage Status][codecov-badge]][codecov-link]

- [Overview](#overview)
- [Installation](#installation)
- [Build Formats](#build-formats)
- [Usage](#usage)
- [Validators](#validators)
  - [Base](#base)
  - [Immutable](#immutable)
  - [Laravel](#laravel)
- [License](#license)

## Overview

`vtypes` is built on top of `validate.js`, providing additional validation rules for
certain data patterns / data types.

## Installation

```sh
$ npm install vtypes

```

## Build Formats

  -   [vtypes](https://www.npmjs.com/package/vtypes)
  -   [vtypes-register](https://www.npmjs.com/package/vtypes-register) -
  -   [per module format](https://www.npmjs.com/browse/keyword/vtypes-modularized)

i.e.

```sh
# install validate.js
$ npm install validate.js

# and install one of the following:
$ npm install vtypes
$ npm install vtypes-register
$ npm install vtypes-* # where * corresponds to a validator type
```

## Usage

```js
// export of all vtype validators without registering
const vtypes = require('vtypes');
const validate = require('validate.js');

// you can then proceed to register the required validators.
validate.validators.array = vtypes.array;

// or everything
validate.extend(validate.validators, vtypes);

// start using the validators
```

Alternatively, using `vtypes-register`:

```js
//  import the register file to include all available validators.
require('vtypes-register')();
const validate = require('validate.js');

// start using the validators
```

## Validators

For more information, do check their individual `README.md` in their respective folders.

### Base

| Validator              | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| [array][array]         | checks for array (empty array is also valid)                    |
| [arrayOf][arrayOf]     | allows recursive validation of an array content                 |
| [bool][bool]           | must be of type boolean                                         |
| [func][func]           | must be a type function                                         |
| [invariant][invariant] | conditional check based on a truthy result of a function        |
| [objectOf][objectOf]   | object with property values following a certain validation rule |
| [only][only]           | must be the ONLY ONE present amongst specified attributes       |
| [shape][shape]         | allows recursive validation of nested object                    |
| [string][string]       | must be a type string                                           |

### Immutable

| Validator              | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| [immutable][immutable] | checks for immutable resource                                     |
| [size][size]           | same as the built in "length" validator, but uses "size" instead. |

### Laravel

The following validators are inspired from the built-in validation rules of [Laravel](https://laravel.com/docs/5.4/validation#available-validation-rules)

| Validator                                | Description                                                         |
| ---------------------------------------- | ------------------------------------------------------------------- |
| [different][different]                   | must have a different value than the provided field.                |
| [json][json]                             | must be a valid JSON string.                                        |
| [requiredIf][requiredIf]                 | required if the another attribute is present or equal to any value. |
| [requiredUnless][requiredUnless]         | required unless the another attribute is equal to any value.        |
| [requiredWith][requiredWith]             | required if ANY of the other specified attributes are present.      |
| [requiredWithAll][requiredWithAll]       | required if ALL of the other specified attributes are present.      |
| [requiredWithout][requiredWithout]       | required when ANY of the specified attributes are not present       |
| [requiredWithoutAll][requiredWithoutAll] | required when ALL of the specified attributes are not present       |

## License

`vtypes` is [MIT licensed](./LICENSE)

[npm-badge]: https://img.shields.io/npm/v/vtypes.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes

[build-badge]: https://img.shields.io/circleci/project/github/yeojz/vtypes/master.svg?style=flat-square
[build-link]: https://circleci.com/gh/yeojz/vtypes.svg

[codecov-badge]: https://img.shields.io/codecov/c/github/yeojz/vtypes/master.svg?style=flat-square
[codecov-link]: https://codecov.io/gh/yeojz/vtypes

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
