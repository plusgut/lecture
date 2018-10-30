function castNumber(value) {
  const result = parseInt(value, 10);
  if (isNaN(result)) {
    throw new Error('Invalid parameter')
  }
  return result;
}

function addition(a, b) {
  return castNumber(a) + castNumber(b);
}

function additionCurry(a) {
  const parsedA = castNumber(a);
  return (b) => addition(parsedA, b)
}