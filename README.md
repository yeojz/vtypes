# vtypes

> Additional validation rules for validate.js

[![npm package][npm-badge]][npm-link]
[![Build Status][build-badge]][build-link]
[![Coverage Status][codecov-badge]][codecov-link]

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Validators](#validators)
  - [Basic](#basic)
  - [Complex](#complex)
  - [Inspired](#inspired)
- [License](#license)

## Overview

`vtypes` is built on top of `validate.js`, providing additional validation rules,

## Installation

```sh
$> npm install vtypes
$> npm install validate.js
```

## Usage

```js
// export of all vtype validators without registering
import vtypes from 'vtypes';
import validate from 'validate.js';

// you can then proceed to register the required validators.
validate.validators.array = vtypes.array;

// start using the validators
```

Alternatively:

```js
//  import the register file to include all available validators.
import 'vtypes/register';
import validate from 'validate.js';

// start using the validators
```

## Validators

### Basic

| Validator | Description                                              |
| --------- | -------------------------------------------------------- |
| array     | checks for array (empty array is also valid)             |
| bool      | must be of type boolean                                  |
| func      | must be a type function                                  |
| invariant | conditional check based on a truthy result of a function |
| string    | must be a type string                                    |


### Complex

| Validator   | Description                                     |
| ----------- | ----------------------------------------------- |
| arrayShape  | allows recursive validation of an array content |
| objectShape | allows recursive validation of nested object    |


### Inspired

The following validators are inspired from the build-in validation rules of [Laravel](https://laravel.com/docs/5.4/validation#available-validation-rules)

| Validator          | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| different          | must have a different value than the provided field.                                       |
| json               | must be a valid JSON string.                                                               |
| requiredIf         | must be present and not empty if the another field is present or equal to any value.       |
| requiredUnless     | must be present and not empty unless the another field is equal to any value.              |
| requiredWith       | must be present and not empty only if any of the other specified fields are present.       |
| requiredWithAll    | must be present and not empty only if all of the other specified fields are present.       |
| requiredWithout    | must be present and not empty only when any of the other specified fields are not present. |
| requiredWithoutAll | must be present and not empty only when all of the other specified fields are not present. |


## License

`vtypes` is [MIT licensed](./LICENSE)

[npm-badge]: https://img.shields.io/npm/v/vtypes.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes

[build-badge]: https://img.shields.io/circleci/project/github/yeojz/vtypes/master.svg?style=flat-square
[build-link]: https://circleci.com/gh/yeojz/vtypes.svg

[codecov-badge]: https://img.shields.io/codecov/c/github/yeojz/vtypes/master.svg?style=flat-square
[codecov-link]: https://codecov.io/gh/yeojz/vtypes
