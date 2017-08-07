# vtypes-func

> "function" validation for validate.js

[![npm package][npm-badge]][npm-link]

- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## Installation

Using npm:

```sh
$ npm i --save vtypes-func
```

```js
const validate = require('validate.js');
const vFunc = require('vtypes-func');

// you can then proceed to register the required validators.
validate.validators.func = vFunc;
```

## Usage

```js
validate({}, {attr: {func: true}});
// => undefined

validate({attr: 'foo'}, {attr: {func: true}});
// => {attr: ["Attr must be of type function"]}

validate({attr: function(){}, {attr: {func: true}});
// => undefined
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name    | type   | default                    | description   |
| ------- | ------ | -------------------------- | ------------- |
| message | string | `must be of type function` | Error message |

## License
`vtypes-func` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-func.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-func
[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-func/src
