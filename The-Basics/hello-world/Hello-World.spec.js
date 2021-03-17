const { test, expect } = require('@jest/globals');
const helloWorld = require('./hello-world');

test("Print 'Hello, world'", () => {
  const helloWorldString = helloWorld();
  expect(helloWorldString).toBe('Hello, World!');
});
