import validate from 'validate.js';
import vtypes from 'vtypes';

function register() {
  validate.extend(validate.validators, vtypes);
}
register.validators = vtypes;
export default register;
