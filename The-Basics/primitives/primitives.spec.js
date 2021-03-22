const { test, expect } = require('@jest/globals');
const valueFunc = require('./primitives');

test('Testing Values', () => {
  const string = 'I am going to return as a datatype primative String!';
  const returnedString = valueFunc(string);

  const number = 42;
  const returnedNumber = valueFunc(number);

  const boolean = true;
  const returnedBoolean = valueFunc(boolean);

  let nodef;
  const returnedUndefined = valueFunc(nodef);

  expect(returnedString).toBe('I am a string!');
  expect(returnedNumber).toBe('I am a number!');
  expect(returnedBoolean).toBe('I am boolean!');
  expect(returnedUndefined).toBe('I am undefined!');
});
