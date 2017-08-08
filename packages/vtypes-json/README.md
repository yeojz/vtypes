# vtypes-json

> "json" validation for validate.js

[![npm package][npm-badge]][npm-link]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `json` validator attempts to make sure the input is a valid json.

## Installation

Using npm:

```sh
$ npm i --save vtypes-json
```

```js
const validate = require('validate.js');
const json = require('vtypes-json');

// you can then proceed to register the required validators.
validate.validators.json = json;
```

## Usage

```js
validate({}, {attr: {json: true}});
// => undefined

validate({attr: 'foo'}, {attr: {json: true}});
// => {attr: ["Attr must be a valid JSON string"]}

validate({attr: '{"foo": "bar"}', {attr: {json: true}});
// => undefined
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name    | type   | default                       | description   |
| ------- | ------ | ----------------------------- | ------------- |
| message | string | `must be a valid JSON string` | Error message |


## License

`vtypes-json` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-json.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-json
[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-json/src
