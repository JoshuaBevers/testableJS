const { send } = require('process');
const sendHimToWork = require('./objectives');

test('working with our class!', () => {
  const Larry = {
    name: 'Larry',
    awake: true,
    activity: 'Waking',
    happiness: 10,
  };

  sendHimToWork(Larry);
  giveHimCoffee(Larry);
  console.log(Larry);
});
