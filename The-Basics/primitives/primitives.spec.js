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

  expect(returnedString).toBe(String);
  expect(returnedNumber).toBe(Number);
  expect(returnedBoolean).toBe(Boolean);
  expect(returnedUndefined).toBe(undefined);
});
