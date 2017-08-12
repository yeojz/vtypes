# vtypes-requiredwithout

> "Required Without" validator for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `requiredWithout` validator attempts to ensure that the input
is be present and not empty if _ANY_ of the other specified
fields are _NOT_ present.


The field under validation must be present and not empty
only when any of the other specified fields are not present.

## Installation

Using npm:

```sh
$ npm i --save vtypes-requiredwithout
```

```js
const validate = require('validate.js');
const requiredWithout = require('vtypes-requiredwithout');

// you can then proceed to register the required validators.
validate.validators.requiredWithout = requiredWithout;
```

## Usage

```js
const constraint = {
  attr: {
    requiredWithout: {attributes: ['other', 'related']}
  }
}

validate({}, constraint);
// => {attr: ['Attr is required when any of these attributes (other, related) are not present']}

validate({other: 'bar', related: 'baz'}, constraint);
// => undefined

validate({other: 'bar'}, constraint);
// => {attr: ['Attr is required when any of these attributes (other, related) are not present']}

validate({attr: 'foo', other: 'bar'}, constraint);
// => undefined
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name       | type    | default                                                                    | description                                                                         |
| ---------- | ------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| attributes | array   |                                                                            | The list of attributes                                                              |
| message    | string  | `is required when any of these attributes (%{attributes}) are not present` | Error message                                                                       |
| truthy     | boolean | false                                                                      | Checks for truthy values instead of checking only for `null` and `undefined` values |

## License

`vtypes-requiredwithout` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-requiredwithout.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-requiredwithout
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredwithout/src
