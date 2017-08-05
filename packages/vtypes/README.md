# vtypes

> Additional validation rules / contraints for validate.js to address other common data patterns

[![npm package][npm-badge]][npm-link]
[![Build Status][build-badge]][build-link]
[![Coverage Status][codecov-badge]][codecov-link]

- [Overview](#overview)
- [Build Formats](#build-formats)
- [Usage](#usage)
- [Validators](#validators)
- [License](#license)

## Overview

`vtypes` is built on top of `validate.js`, providing additional validation rules for
certain data patterns / data types.

See the [package repository](repository) for more details.

## Build Formats

  -   [vtypes](https://www.npmjs.com/package/vtypes)
  -   [vtypes-register](https://www.npmjs.com/package/vtypes-register)
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

For the most updated validators and their information, please
see the [package repository][repository] for more details.

-   [arrayOf][arrayOf]
-   [array][array]
-   [bool][bool]
-   [different][different]
-   [func][func]
-   [immutable][immutable]
-   [invariant][invariant]
-   [json][json]
-   [objectOf][objectOf]
-   [only][only]
-   [requiredIf][requiredIf]
-   [requiredUnless][requiredUnless]
-   [requiredWithAll][requiredWithAll]
-   [requiredWith][requiredWith]
-   [requiredWithoutAll][requiredWithoutAll]
-   [requiredWithout][requiredWithout]
-   [shape][shape]
-   [size][size]
-   [string][string]

## License

`vtypes` is [MIT licensed][license]

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

[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
