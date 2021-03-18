function primatives(value) {
  if (typeof value === 'string') {
    return String;
  }
  if (typeof value === 'number') {
    return Number;
  }
  if (typeof value === 'boolean') {
    return Boolean;
  }
  if (typeof value === 'undefined') {
    return undefined;
  }
}

module.exports = primatives;
