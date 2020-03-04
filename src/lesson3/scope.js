class Multiply {
  constructor(firstValue) {
    this.firstValue = firstValue;
  }

  add(secondValue) {
    return this.firstValue * secondValue;
  }
}

const double = new Multiply(2);
const add = double.add;

if (double.add(4) !== add(4)) {
  throw new Error('The values are not right')
}