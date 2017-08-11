# vtypes-requiredunless

> "Required Unless" validator for validate.js

[![npm package][npm-badge]][npm-link]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `requiredUnless` validator attempts to make sure the input is present
and not empty UNLESS another field is present / equal to any predefined value.

## Installation

Using npm:

```sh
$ npm i --save vtypes-requiredunless
```

```js
const validate = require('validate.js');
const requiredUnless = require('vtypes-requiredunless');

// you can then proceed to register the required validators.
validate.validators.requiredUnless = requiredUnless;
```

## Usage

```js
const constraint1 = {
  attr: {
    requiredUnless: {attribute: 'other'}
  }
}

validate({}, constraint1);
// => {attr: ['Attr is required when other is present and equal to *']}

validate({attr: 'foo', other: 'bar'}, constraint1);
// => {attr: ['Attr is required when other is present and equal to *']}

validate({other: 'bar'}, constraint1);
// => undefined

const constraints2 = {
  attr: {
    requiredUnless: {attribute: 'other', attributeValue: 'bar2'}
  }
}

validate({other: 'bar2'}, constraints2);
// => undefined

validate({attr: 'foo' other: 'bar2'}, constraints2);
// => {attr: ['Attr is required when other is present and equal to *']}
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name           | type     | default                                    | description                                                                         |
| -------------- | -------- | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| allowTruthy    | boolean  | false                                      | Checks for truthy values instead of checking only for `null` and `undefined` values |
| attribute      | string   |                                            | The attribute key that you want to check                                            |
| attributeValue | string   |                                            | When set, the value of the attribute should equal to this                           |
| comparator     | function |                                            | custom comparison method. In the event target value is of a complex type            |
| message        | string   | `is required when %{attribute} is present` | Error message                                                                       |
| symbolForAny   | string   | *                                          | symbol to use when no `attributeValue` is defined                                   |

## License

`vtypes-requiredunless` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-requiredunless.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-requiredunless
[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-requiredunless/src
