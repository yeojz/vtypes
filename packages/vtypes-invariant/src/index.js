import invariant from './invariant';
import create from './create';

function invariantIndex(...args) {
  return invariant(...args);
}

invariantIndex.create = create;
export default invariantIndex;
