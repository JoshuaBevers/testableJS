const mathClass = require('./basic-math');

test('working with our class!', () => {
  const number = new mathClass(5);
  number.double();
  expect(number.number).toEqual(10);
});
