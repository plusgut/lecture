function addition(a, b) {
  return a + b;
}

/*
  This function multiplies every given value
  the first parameter is supposed to be the value, everything should be multiplied with
  the second parameter is supposed to be an array, which needs to be multiplied
*/
function multiply() {

}

function onlyEvenNumbers() {

}
function oneAbove() {

}

function allAbove() {

}

function sumList() {

}

// Tests
function testAddition() {
  const simpleAdditionResult = addition(0, 1);
  if (simpleAdditionResult !== 1) {
    throw new Error('Incorrect behaviour');
  }

  const stringAdditionResult = addition('0', '1');
  if (stringAdditionResult !== 1) {
    throw new Error('Incorrect behaviour');
  }

  const negativeResult = addition('0', '-1');
  if (negativeResult !== -1) {
    throw new Error('Incorrect behaviour');
  }

  const floatingAdditionResult = addition('2', '2.5');
  if (floatingAdditionResult !== 4.5) {
    throw new Error('Incorrect behaviour');
  }
}

function testMultiplication() {
  const multipliedByTwo = multiply(2, [ 1, 2, 3 ]);
  if (isUnequal(multipliedByTwo, [ 2, 4, 6 ])) {
    throw new Error('Incorrect behaviour');
  }

  const multipliedByThree = multiply(3, [ 1, 2 ]);
  if (isUnequal(multipliedByThree, [ 3, 6 ])) {
    throw new Error('Incorrect behaviour');
  }
}

function testOnlyEvenNumbers() {
  const firstResult = onlyEvenNumbers([ 1, 2, 3, 4 ]);
  if (isUnequal(firstResult, [ 2, 4 ])) {
    throw new Error('Incorrect behaviour');
  }

  const secondResult = onlyEvenNumbers([ 6, 7, 8, 9 ]);
  if (isUnequal(secondResult, [ 6, 8 ])) {
    throw new Error('Incorrect behaviour');
  }
}

function testOneAbove() {
  const noneAboveHundredResult = oneAbove(100, [ 0, 1, 2, 3 ]);
  if (noneAboveHundredResult !== false) {
    throw new Error('Incorrect behaviour');
  }

  const oneAboveHundredResult = oneAbove(100, [ 0, 1, 200, 3 ]);
  if (oneAboveHundredResult !== true) {
    throw new Error('Incorrect behaviour');
  }

  const allAboveZeroResult = oneAbove(0, [ 1, 2, 3 ]);
  if (allAboveZeroResult !== false) {
    throw new Error('Incorrect behaviour');
  }
}

function testAllAbove() {
  const notAllOfAge = allAbove(18, [ 19, 20, 16 ]);
  if (notAllOfAge !== false) {
    throw new Error('Incorrect behaviour');
  }

  const allPensioners = allAbove(67, [ 75, 80, 100 ]);
  if (allPensioners !== true) {
    throw new Error('Incorrect behaviour');
  }
}

function testSumList() {
  const fristResult = sumList([ 1, 2, 3 ]);
  if (fristResult !== 6) {
    throw new Error('Incorrect behaviour');
  }

  const secondResult = sumList([ 4, 5, 6 ]);
  if (secondResult !== 15) {
    throw new Error('Incorrect behaviour');
  }
}

// Test initialization
testAddition();
// testMultiplication();
// testOnlyEvenNumbers();
// testOneAbove();
// testAllAbove();
// testSumList();

// helperFunction
function isUnequal(a, b) {
  return JSON.stringify(a) !== JSON.stringify(b);
}
