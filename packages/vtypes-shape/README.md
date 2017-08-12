# vtypes-shape

> "shape" validation for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `shape` validator attempts to ensure that the object
validates against the sub-rule.

It is meant to provide nested validations instead of
using deep nested attributes as the keys.

i.e.

```js
// instead of
const constraints = {
  'deep.attr': {presence: true}
}

// use natural nesting
const constraints = {
  'deep': {
    'shape': {
      'values': {
        'attr': {presence: true}
      }
    }
  }
}
```

## Installation

Using npm:

```sh
$ npm i --save vtypes-shape
```

```js
const validate = require('validate.js');
const shape = require('vtypes-shape');

// you can then proceed to register the required validators.
validate.validators.shape = shape;
```

## Usage

```js
validate({}, {attr: {shape: true}});
// => undefined

validate({attr: {}, {attr: {shape: false}});
// => undefined

validate({attr: 'foo'}, {attr: {shape: true}});
// => {attr: {_message: 'Attr is not of type object'}}
```

```js
const value = {
  attr: {
    b: 't2'
  }
};

const constraints = {
  attr: {
    shape: {
      values: {
        a: {
          presence: true,
        },
        b: {
          length: {is: 3}
        }
      }
    }
  }
};

validate(value, constraints);
// {
//   attr: {
//      a: [
//        'A can\'t be blank'
//      ],
//      b: [
//        'B is the wrong length (should be 3 characters)'
//      ]
//      _message: '^One or more object values for value is not valid',
//   }
// };

```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name       | type     | default                                              | description                                   |
| ---------- | -------- | ---------------------------------------------------- | --------------------------------------------- |
| formatter  | function | `(v) => v`                                           | Allows processing of errors before it returns |
| message    | string   | `^One or more object values for %{key} is not valid` | Error message                                 |
| messageKey | string   | `_message`                                           | key in return object for the summary message  |
| notObject  | string   | `%{key} is not of type object`                       | Error when value is not an object             |

## License

`vtypes-shape` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-shape.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-shape
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-shape/src
