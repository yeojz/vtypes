# vtypes-only

> "only" validation for validate.js

[![npm package][npm-badge]][npm-link]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `only` validator attempts to make sure that when the field is filled,
it will be the only one that is filled amongst the other fields.

## Installation

Using npm:

```sh
$ npm i --save vtypes-only
```

```js
const validate = require('validate.js');
const objectOf = require('vtypes-only');

// you can then proceed to register the required validators.
validate.validators.only = only;
```

## Usage

```js
validate({}, {attr: {objectof: true}});
// => undefined

validate({attr: {}}, {attr: {objectof: false}});
// => undefined
```

```js
const value = {
  attr: {
    a: '',
    b: 't2'
  }
};

const constraints = {
  attr: {
    objectof: {
      contains: { presence: true, length: {is: 3} }
    }
  }
};

validate(value, constraints);
// {
//   attr: {
//     _message: '^One or more object values for value is not valid',
//     a: [
//       'A can\'t be blank',
//       'A is the wrong length (should be 3 characters)'
//     ],
//     b: [
//       'B is the wrong length (should be 3 characters)'
//     ]
//   }
// };

```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name    | type   | default                                                                                  | description   |
| ------- | ------ | ---------------------------------------------------------------------------------------- | ------------- |
| message | string | `'must be the only key present. Other attributes (%{attributes}) should not be present'` | Error message |


## License

`vtypes-objectof` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-only.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-only
[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-only/src
