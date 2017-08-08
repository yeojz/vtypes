# vtypes-arrayof

> "arrayOf" validation for validate.js

[![npm package][npm-badge]][npm-link]

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
- [License](#license)

## About

The `arrayOf` validator attempts to make sure the all values in the array
conforms to a predefined rule.

## Installation

Using npm:

```sh
$ npm i --save vtypes-arrayof
```

```js
const validate = require('validate.js');
const arrayOf = require('vtypes-arrayOf');

// you can then proceed to register the required validators.
validate.validators.arrayOf = arrayOf;
```

## Usage

```js
validate({}, {attr: {arrayOf: true}});
// => undefined

validate({attr: [], {attr: {arrayOf: false}});
// => undefined

validate({attr: 'foo'}, {attr: {arrayOf: true}});
// => {attr: {_message: 'Attr is not of type array'}}
```

```js
const value = {
  attr: ['', 't2', 't31']
};

const constraints = {
  attr: {
    arrayOf: {
      contains: { presence: true, length: {is: 3} }
    }
  }
};

validate(value, constraints);
// {
//   attr: {
//     '0': [
//       'Attr[0] can\'t be blank',
//       'Attr[0] is the wrong length (should be 3 characters)'
//     ],
//     '1': [
//       'Attr[1] is the wrong length (should be 3 characters)'
//     ],
//     _message: '^One or more array values for attr is not valid'
//   }
// };

```

For more examples, check out the test files in this package's [source][src] folder.

## Available Options

| name       | type     | default                                             | description                                   |
| ---------- | -------- | --------------------------------------------------- | --------------------------------------------- |
| formatter  | function | `(v) => v`                                          | Allows processing of errors before it returns |
| message    | string   | `^One or more array values for %{key} is not valid` | Error message                                 |
| messageKey | string   | `_message`                                          | key in return object for the summary message  |
| notArray   | string   | `%{key} is not of type object`                      | Error when value is not an object             |

## License

`vtypes-arrayof` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-arrayof.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-arrayof
[repository]: https://github.com/yeojz/vtypes
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes-arrayof/src
