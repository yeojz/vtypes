# vtypes-requiredwithall

> "Required With All" validator for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `requiredWithAll` validator attempts to ensure that the input
is be present and not empty if _ALL_ of the other specified
fields are present.

## Installation

Using npm:

```sh
$ npm i --save vtypes-requiredwithall
```

```js
const validate = require('validate.js');
const requiredWithAll = require('vtypes-requiredwithall');

// you can then proceed to register the required validators.
validate.validators.requiredWithAll = requiredWithAll;
```

## Usage

```js
const constraint = {
  attr: {
    requiredWithAll: {attributes: ['other', 'related']}
  }
}

validate({}, constraint);
// => undefined

validate({attr: 'foo', other: 'bar', related: 'baz'}, constraint);
// => undefined

validate({other: 'bar'}, constraint);
// => undefined

validate({other: 'bar', related: 'baz'}, constraint);
// => {attr: ['Attr is required when any of these attributes (other, related) are present']}
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name       | type    | default                                                                | description                                                                         |
| ---------- | ------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| attributes | array   |                                                                        | The list of attributes                                                              |
| message    | string  | `is required when all of these attributes (%{attributes}) are present` | Error message                                                                       |
| truthy     | boolean | false                                                                  | Checks for truthy values instead of checking only for `null` and `undefined` values |

## License

`vtypes-requiredwithall` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-requiredwithall.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-requiredwithall
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredwithall/src
