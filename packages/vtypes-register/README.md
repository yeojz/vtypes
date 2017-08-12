# vtypes-register

> Register all vtype validators with validate.js

[![npm package][npm-badge]][npm-link]
[![vtypes][vtypes-badge]][repository]

- [About](#about)
- [Installation](#installation)
- [License](#license)

## About

Registers all validators available as default in [vtypes][src-vtypes]
with validate.js

## Installation

Using npm:

```sh
$ npm i --save vtypes-register
```

```js
//  import the register file to include all available validators.
require('vtypes-register')();
const validate = require('validate.js');

// start using the validators
```

## License

`vtypes` is [MIT licensed][license]

[npm-badge]: https://img.shields.io/npm/v/vtypes-register.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/vtypes-register
[repository]: https://github.com/yeojz/vtypes
[vtypes-badge]: https://img.shields.io/badge/vtypes-repo-blue.svg?style=flat-square
[license]: https://github.com/yeojz/vtypes/blob/master/LICENSE
[src-vtypes]: https://github.com/yeojz/vtypes/tree/master/packages/vtypes/src
