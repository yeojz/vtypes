# vtypes-different

> "different" validation for validate.js

[![npm package][npm-badge]][npm-link]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `different` validator is the opposite of `equality` validator that is provided by `validate.js`
It can be used to verify that one attribute is always different to another.

By default `!==` is used to check the quality, if you need to validate more complex objects you can give a function using the comparator option which should be a function that accepts two arguments and returns `true` if they objects are different and `false` if they are equal.

## Installation

Using npm:

```sh
$ npm i --save vtypes-different
```

```js
const validate = require('validate.js');
const different = require('vtypes-different');

// you can then proceed to register the required validators.
validate.validators.different = different;
```

## Usage

```js
validate({}, {attr: {different: true}});
// => undefined

validate({attr: 'foo'}, {attr: {different: true}});
// => {attr: ["Attr must be of type differentean"]}

validate({attr: true, {attr: {different: true}});
// => undefined

validate({attr: false, {attr: {different: true}});
// => undefined

var constraints = {
  password: {
    different: "prevPassword"
  }
};

validate({password: "foo", prevPassword: "bar"}, constraints);
// => undefined

validate({password: "foo", prevPassword: "foo"}, constraints);
// => {password: ["Password is not different from prev password"]}
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name    | type   | default                              | description   |
| ------- | ------ | ------------------------------------ | ------------- |
| message | string | `is not different from %{attribute}` | Error message |

## License

`vtypes-different` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-different.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-different
[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-different/src
