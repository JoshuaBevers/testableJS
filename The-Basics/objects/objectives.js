const person = {
  name: 'person',
  awake: true,
  activity: 'Waking',
  happiness: 10,
};

function sendHimToWork(person) {
  if (person.activity != 'working' && person.awake != true) {
    person.activity = 'working';
    person.happiness = person.happiness - 1;
  }
}
module.exports = sendHimToWork;
