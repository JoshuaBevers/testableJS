const helloWorld = require('./hello-world');

test("Print 'Hello, world'", () => {
    const helloWorldString = helloWorld();
    // const helloWorldString = 'Hello, World!';
    expect(helloWorldString).toEqual('Hello, World!');

})