# vtypes-immutable

> "immutable" validator for validate.js

[![npm package][npm-badge]][npm-link]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `immutable` validator attempts to make sure the field is a valid immutable value.
The API for checking immutability is referenced off [immutable.js](https://github.com/facebook/immutable-js).

If no parser is provided, then best effort guess if a value is immutable
based on availability of conversion functions like `toJS`, `toJSON`, `toArray`, `toObject`;

## Installation

```sh
$ npm install vtypes-immutable
```

```js
const validate = require('validate.js');
const vImmutable = require('vtypes-immutable');

// you can then proceed to register the required validators.
validate.validators.immutable = vImmutable;
```

## Usage

```js
const Immutable = require('immutable');

validate({}, {attr: {immutable: true}});
// => undefined

validate({attr: 'foo'}, {attr: {immutable: true}});
// => {attr: ["Attr is not an immutable value"]}
```

```js

// note: both "type" and "library" must be preset.
const constraints = {
  attr: {
    immutable: {
      library: Immutable,
      type: 'List'
    }
  }
}

validate({attr: 'foo'}, constraints);
// => {attr: ["Attr is not an immutable List"]}
```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name    | type   | default                       | description                                  |
| ------- | ------ | ----------------------------- | -------------------------------------------- |
| library | func   | `undefined`                   | The immutable library                        |
| message | string | `is not an immutable %{type}` | Error message                                |
| type    | string | `undefined`                   | A type that is accepted by immutable library |

## License

`vtypes-immutable` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-immutable.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-immutable
[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-immutable/src
