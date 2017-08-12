# vtypes-string

> "string" validation for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `string` validator attempts to ensure that the field is a valid string.

## Installation

Using npm:

```sh
$ npm i --save vtypes-string
```

```js
const validate = require('validate.js');
const string = require('vtypes-string');

// you can then proceed to register the required validators.
validate.validators.string = string;
```

## Usage

```js
validate({}, {attr: {string: true}});
// => undefined

validate({attr: false}, {attr: {string: true}});
// => {attr: ["Attr must be of type string"]}

validate({attr: 'foo', {attr: {string: true}});
// => undefined
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name    | type   | default                  | description   |
| ------- | ------ | ------------------------ | ------------- |
| message | string | `must be of type string` | Error message |


## License

`vtypes-string` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-string.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-string
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-string/src
