# vtypes-immutable

> "Immutable" validator for validate.js

The immutable validator validates that are value is immutable. The API for checking immutability is referenced off [immutable.js](https://github.com/facebook/immutable-js).

## Installation

```sh
$ npm install vtypes-immutable
```

```js
const validate = require('validate.js');
const vtypeImmutable = require('vtypes-immutable');
const Immutable = require('immutable');


validate.validators.immutable = vtypeImmutable;
validate.extend(validators.immutable.options, {parser: Immutable});
```

## Usage

```js

validate({}, {attr: {immutable: true}});
// => undefined

validate({attr: "foo"}, {attr: {immutable: true}});
// => {attr: ["Attr is not an immutable value"]}

validate({attr: "foo"}, {attr: {immutable: {type: 'List'}}});
// => {attr: ["Attr is not an immutable List"]}
```

## Available Options

| name    | type   | default                       | description                                                            |
| ------- | ------ | ----------------------------- | ---------------------------------------------------------------------- |
| guess   | bool   | `false`                       | Alternative to an immutable library, try and guess if it is immutable. |
| message | string | `is not an immutable %{type}` | Error message                                                          |
| parser  | func   | `undefined`                   | The immutable library                                                  |
| type    | string | `undefined`                   | A type that is accepted by immutable library                           |
