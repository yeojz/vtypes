# vtypes

> Additional rules / contraints for validate.js to address other common data patterns

## Installation

Using npm:

```sh
$ npm i --save vtypes validate.js
```

## Usage

```js
// export of all vtype validators without registering
const vtypes = require('vtypes');
let validate = require('validate.js');

// you can then proceed to register the required validators.
validate.validators.array = vtypes.array;

// or everything
validate.extend(validate.validators, vtypes);
```

See the [package source](source) for more details.

[source]: https://github.com/yeojz/vtypes
