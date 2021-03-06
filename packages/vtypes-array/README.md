# vtypes-array

> "array" validation for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `array` validator attempts to ensure that the field is a valid array.

## Installation

Using npm:

```sh
$ npm i --save vtypes-array
```

```js
const validate = require('validate.js');
const array = require('vtypes-array');

// you can then proceed to register the required validators.
validate.validators.array = array;
```

## Usage

```js
validate({}, {attr: {array: true}});
// => undefined

validate({attr: 'foo'}, {attr: {array: true}});
// => {attr: ["Attr must be of type array"]}

validate({attr: [], {attr: {array: true}});
// => undefined
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name    | type   | default                 | description   |
| ------- | ------ | ----------------------- | ------------- |
| message | string | `must be of type array` | Error message |

## License

`vtypes-array` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-array.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-array
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-array/src
