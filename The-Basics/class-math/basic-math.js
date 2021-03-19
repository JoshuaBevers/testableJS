class mathamanator {
  constructor(number) {
    this.number = number;
  }

  add(addiative) {
    this.number = this.number + addiative;
  }

  substract(sub) {
    this.number = this.number - sub;
  }

  double() {
    this.number = this.number * 2;
  }

  divide(divisor) {
    this.number = this.number / divisor;
  }

  multiply(multiple) {
    this.number = this.number * multiple;
  }
}

module.exports = mathamanator;
