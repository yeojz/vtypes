import validate from 'validate.js';
import validators from './validators/index';

validate.extend(validate.validators, validators);
export default validators;
