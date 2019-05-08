function addition(a, b) {
  return a + b;
}

describe("lectureOne", () => {
  it('addition results in correct value', () => {
    const result = addition('0' , '1');
    expect(result).toBe(1);

    expect(addition('2' , '2')).toBe(4);
    expect(addition('0' , '-1')).toBe(-1);
  });

  it('addition with not-number', () => {
    expect(() => addition('foo', 3)).toThrow(new Error('Invalid parameter'))
  });

  it('addition with to few parameters', () => {
    expect(() => addition('3')).toThrow(new Error('To few parameters'))
  });
});
