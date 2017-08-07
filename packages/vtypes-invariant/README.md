# vtypes-invariant

> invariant-style validation for validate.js

[![npm package][npm-badge]][npm-link]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [Create sub-validators](#create-sub-validators)
- [License](#license)

## About

The invariant validator brings the concept of the `invariant` library to `validate.js`, allowing you to
define a function that has to return a strict `true` value for it to be valid.

**Note**: This validator will always be invoked by default. Thus it will check even when value is `undefined` or `null`.
You can disable this behaviour by passing `allowNil: true`;

## Installation

Using npm:

```sh
$ npm i --save vtypes-invariant
```

```js
const validate = require('validate.js');
const invariant = require('vtypes-invariant');

// you can then proceed to register the required validators.
validate.validators.invariant = invariant;
```

## Usage

```js
const constrants = {
  attr: {
    condition: (value) => value === 'bar'
  }
}

const alwaysRunConstrants = {
  attr: {
    allowNil: false,
    condition: (value) => value === 'bar'
  }
}

validate({}, constraints);
// => undefined

validate({attr: 'foo'}, constraints);
// => {attr: ["Attr invariant violation"]}

validate({}, alwaysRunConstrants);
// => {attr: ["Attr invariant violation"]}

validate({attr: 'bar', constraints);
// => undefined
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name        | type     | default               | description                                                                      |
| ----------- | -------- | --------------------- | -------------------------------------------------------------------------------- |
| allowNil    | boolean  | `false`               | Error message                                                                    |
| allowTruthy | boolean  | `false`               | Allow the conditional function to return truthy values instead of strict boolean |
| condition   | function | `undefined`           | Returns a truthy value for validation to pass                                    |
| message     | string   | `invariant violation` | Error message                                                                    |

The `condition` function takes in `(value, key, attributes)` of the validator.

## Create sub-validators

The invariant validator also provides a `invariant.create` function which lets you quickly create
new validators by calling `invriant.create(condition, message)`, providing a condition and message.

## License

`vtypes-invariant` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-invariant.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-invariant
[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-invariant/src
