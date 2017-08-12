# vtypes-bool

> "boolean" validation for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About
The `bool` validator attempts to ensure that the field is a valid boolean.

## Installation

Using npm:

```sh
$ npm i --save vtypes-bool
```

```js
const validate = require('validate.js');
const bool = require('vtypes-bool');

// you can then proceed to register the required validators.
validate.validators.bool = bool;
```

## Usage

```js
validate({}, {attr: {bool: true}});
// => undefined

validate({attr: 'foo'}, {attr: {bool: true}});
// => {attr: ["Attr must be of type boolean"]}

validate({attr: true, {attr: {bool: true}});
// => undefined

validate({attr: false, {attr: {bool: true}});
// => undefined
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name    | type   | default                   | description   |
| ------- | ------ | ------------------------- | ------------- |
| message | string | `must be of type boolean` | Error message |

## License

`vtypes-bool` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-bool.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-bool
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-bool/src
