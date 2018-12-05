import valid from './valid.json';
import invalidExtraFields from './invalid-extra-fields.json';
import invalidMissingFields from './invalid-missing-fields.json';
import invalidWrongTypes from './invalid-wrong-types.json';

interface Person {
  name: string;
  age: number;
}

function testValidity(person: Person) {
  console.warn(person);
}

testValidity(valid);

testValidity(invalidExtraFields);
testValidity(invalidMissingFields);
testValidity(invalidWrongTypes);