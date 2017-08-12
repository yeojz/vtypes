# vtypes-requiredwith

> "Required With" validator for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `requiredWith` validator attempts to ensure that the input
is be present and not empty if _ANY_ of the other specified
fields are present.

## Installation

Using npm:

```sh
$ npm i --save vtypes-requiredwith
```

```js
const validate = require('validate.js');
const requiredWith = require('vtypes-requiredwith');

// you can then proceed to register the required validators.
validate.validators.requiredWith = requiredWith;
```

## Usage

```js
const constraint = {
  attr: {
    requiredWith: {attributes: ['other']}
  }
}

validate({}, constraint);
// => undefined

validate({attr: 'foo', other: 'bar'}, constraint);
// => undefined

validate({other: 'bar'}, constraint);
// => {attr: ['Attr is required when any of these attributes (other) are present']}
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name       | type    | default                                                                | description                                                                         |
| ---------- | ------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| attributes | array   |                                                                        | The list of attributes                                                              |
| message    | string  | `is required when any of these attributes (%{attributes}) are present` | Error message                                                                       |
| truthy     | boolean | false                                                                  | Checks for truthy values instead of checking only for `null` and `undefined` values |

## License

`vtypes-requiredwith` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-requiredwith.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-requiredwith
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredwith/src
