function primatives(value) {
  if (typeof value === 'string') {
    return 'I am a string!';
  }
  if (typeof value === 'number') {
    return 'I am a number!';
  }
  if (typeof value === 'boolean') {
    return 'I am boolean!';
  }
  if (typeof value === 'undefined') {
    return 'I am undefined!';
  }
}

module.exports = primatives;
