class Multiply {
  constructor(firstValue) {
    this.firstValue = firstValue;
  }

  add(secondValue) {
    return this.firstValue * secondValue;
  }
}

describe("lectureOne", () => {
  xit('multiply results in correct value', () => {
    const double = new Multiply(2);
    const add = double.add;

    expect(add(4)).toBe(8)
  });
});
