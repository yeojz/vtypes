# vtypes-size

> "size" validation for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `size` validator attempts to ensure that the size property
of a value is correct.

It is similar to the `length` validator of `validate.js`, but
addresses the case where values use `value.size` instead of `value.length`.

This happens mostly with `immutable.js` objects.

## Installation

Using npm:

```sh
$ npm i --save vtypes-size
```

```js
const validate = require('validate.js');
const size = require('vtypes-size');

// you can then proceed to register the required validators.
validate.validators.size = size;
```

## Usage

```js
const Immutable = require('immutable')

const constraints = {
  key1: {size: {is: 1}},
  key2: {size: {minimum: 1}},
  key3: {size: {maximum: 1}}
};

validate({}, constraints);
// => undefined

const values = {
  key1: new Immutable.List([]),
  key2: new Immutable.List([]),
  key3: new Immutable.List(['foo', 'bar'])
};

validate(values, constraints);
// => {
//   "key1": ["Key1 is the wrong length (should be 1)"],
//   "key2": ["Key2 is too short (minimum is 1)"],
//   "key3": ["Key3 is too long (maximum is 3)"]
// }
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name      | type    | default                                  | description                                      |
| --------- | ------- | ---------------------------------------- | ------------------------------------------------ |
| is        | integer |                                          | Size should be the defined value                 |
| maximum   | integer |                                          | Size should not be more than the defined value   |
| minimum   | integer |                                          | Size should not be less than the defined value   |
| message   | string  |                                          | Error message                                    |
| tooLong   | string  | `is too long (maximum is %{count})`      | Error message when size is beyond maximum        |
| tooShort  | string  | `is too short (minimum is %{count})`     | Error message when size is below minimum         |
| wrongSize | string  | `is the wrong size (should be %{count})` | Error message when size is not equal to expected |

## License

`vtypes-size` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-size.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-size
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-size/src
