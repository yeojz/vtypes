import validate from 'validate.js';

const ACCEPTED_TYPES = [
  'List',
  'Map',
  'OrderedMap',
  'Seq',
  'Set',
  'Stack'
];

function formatter(message, type) {
  return validate.format(message, {type});
}

function guess(value) {
    return typeof value.toJS === 'function'
      || typeof value.toJSON === 'function'
      || typeof value.toArray === 'function'
      || typeof value.toObject === 'function';
}

function immutable(value, options, key) {
  if (!validate.isDefined(value)) {
    return void 0;
  }

  const opt = Object.assign(
    {
      message: 'is not an immutable %{type}',
      guess: false,
      parser: void 0,
      type: void 0
    },
    options
  );


  if (opt.guess) {
    return guess(value) ? void 0 : formatter(opt.message, 'value');
  }

  const {type, parser} = opt;

  if (typeof parser === 'undefined') {
    validate.error(`Attribute ${key} has an undefined "parser" option`);
    return 'has an invalid validator';
  }

  if (!type) {
    return parser.isImmutable(value) ? void 0 : formatter(opt.message, 'value');
  }

  if (ACCEPTED_TYPES.indexOf(type) < 0) {
    validate.warn(`Attribute ${key} has an unknown "type" defined. Defaulting to generic check`);

    return parser.isImmutable(value) ? void 0 : formatter(opt.message, 'value');
  }

  try {
    const isValid = parser[type]['is' + type](value);
    return isValid ? void 0 : formatter(opt.message, type);

  } catch (e) {
    validate.error(`Attribute ${key} has a parser with no "${type}.is${type}" validator`);
    return 'has an invalid validator';
  }
}

export default immutable;
