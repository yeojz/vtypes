# vtypes-invariant

> invariant-style validation for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [Create sub-validators](#create-sub-validators)
- [License](#license)

## About

The `invariant` validator allows you to define a condition/function
that has to evaluate to a strict `true` value for it to be valid.

The concept is similar to the [invariant](https://www.npmjs.com/package/invariant) library,
but for `validate.js`.

**Note**: This validator will always be invoked by default.
Thus it will check even when value is `undefined` or `null`.
You can disable this behaviour by passing `presence: false`;

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
const constraints = {
  attr: {
    condition: (value) => value === 'bar'
  }
}

validate({}, constraints);
// => {attr: ["Attr invariant violation"]}

validate({attr: 'bar'}, constraints);
// => undefined

validate({attr: 'foo'}, constraints);
// => {attr: ["Attr invariant violation"]}
```


```js
const constrants = {
  attr: {
    presence: false,
    condition: (value) => value === 'bar'
  }
}

validate({}, constraints);
// => undefined
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name      | type     | default               | description                                                                      |
| --------- | -------- | --------------------- | -------------------------------------------------------------------------------- |
| condition | function | `undefined`           | Returns a truthy value for validation to pass                                    |
| message   | string   | `invariant violation` | Error message                                                                    |
| presence  | boolean  | `true`                | By default, runs even though value is undefined or null                          |
| truthy    | boolean  | `false`               | Allow the conditional function to return truthy values instead of strict boolean |

The `condition` function takes in `(value, key, attributes)` of the validator.

## Create sub-validators

The invariant validator also provides a `invariant.create` function which lets you quickly create
new validators by calling `invriant.create(condition, message)`, providing a condition and message.

## License

`vtypes-invariant` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-invariant.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-invariant
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-invariant/src
