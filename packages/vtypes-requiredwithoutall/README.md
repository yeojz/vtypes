# vtypes-requiredwithoutall

> "Required Without All" validator for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `requiredWithoutAll` validator attempts to ensure that the input
is be present and not empty if _ALL_ of the other specified
fields are _NOT_ present.


The field under validation must be present and not empty
only when any of the other specified fields are not present.

## Installation

Using npm:

```sh
$ npm i --save vtypes-requiredwithoutall
```

```js
const validate = require('validate.js');
const requiredWithoutAll = require('vtypes-requiredwithoutall');

// you can then proceed to register the required validators.
validate.validators.requiredWithoutAll = requiredWithoutAll;
```

## Usage

```js
const constraint = {
  attr: {
    requiredWithoutAll: {attributes: ['other', 'related']}
  }
}

validate({}, constraint);
// => {attr: ['Attr is required when all of these attributes (other, related) are not present']}

validate({other: 'bar', related: 'baz'}, constraint);
// => undefined

validate({other: 'bar'}, constraint);
// => undefined

validate({attr: 'foo'}, constraint);
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

`vtypes-requiredwithoutall` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-requiredwithoutall.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-requiredwithoutall
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredwithoutall/src
