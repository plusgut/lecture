class Multiply {
  constructor(firstValue) {
    this.firstValue = firstValue;
  }

  add(secondValue) {
    return this.firstValue * secondValue;
  }
}


class Vehicle {
  constructor() {
    this.tires = 2;
  }
}


class Car extends Vehicle{
  constructor(color) {
    super();
    console.log(this.tires);
    this.color = color;
  }
}


const carloAuto = new Car('brown');
console.log(carloAuto.color); // brown

const heikeAuto = new Car('blue');
console.log(heikeAuto.color); // blue