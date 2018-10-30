function castNumber(value) {
  const result = parseInt(value, 10);
  if (isNaN(result)) {
    throw new Error('Invalid parameter')
  }
  return result;
}

export function addition(a, b) {
  return castNumber(a) + castNumber(b);
}

export function additionCurry(a) {
  const parsedA = castNumber(a);
  return (b) => addition(parsedA, b)
}