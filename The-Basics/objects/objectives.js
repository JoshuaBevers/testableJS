const Beth = {
  name: 'Beth',
  awake: true,
  activity: 'Waking',
};

function startWork(Beth) {
  if (Beth.activity != 'working' && Beth.awake != true) {
    Beth.activity = 'working';
  }
}
