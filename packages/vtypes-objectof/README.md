# vtypes-objectof

> "objectOf" validation for validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `objectOf` validator attempts to make sure that the value of all keys
in an object conforms to the predefined format.

## Installation

Using npm:

```sh
$ npm i --save vtypes-objectof
```

```js
const validate = require('validate.js');
const objectOf = require('vtypes-objectof');

// you can then proceed to register the required validators.
validate.validators.objectOf = objectOf;
```

## Usage

```js
validate({}, {attr: {objectof: true}});
// => undefined

validate({attr: {}}, {attr: {objectof: false}});
// => undefined
```

```js
const value = {
  attr: {
    a: '',
    b: 't2'
  }
};

const constraints = {
  attr: {
    objectof: {
      contains: { presence: true, length: {is: 3} }
    }
  }
};

validate(value, constraints);
// {
//   attr: {
//     _message: '^One or more object values for value is not valid',
//     a: [
//       'A can\'t be blank',
//       'A is the wrong length (should be 3 characters)'
//     ],
//     b: [
//       'B is the wrong length (should be 3 characters)'
//     ]
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

`vtypes-objectof` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-objectof.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-objectof
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-objectof/src
