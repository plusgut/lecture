describe("lectureOne", () => {
  it('addition results in correct value', () => {
    const result = addition('0' , '1');
    expect(result).toBe(1);

    expect(addition('2' , '2')).toBe(4);
    expect(addition('0' , '-1')).toBe(-1);
  });

  xit('multiplication with not-number', () => {
    expect(() => {
      addition('foo');
    }).toThrowException(new Error('Invalid parameter'))
  });

  xit('when addition is called with just one parameter, then we can call the result', () => {
    expect(addition('1')('4')).toBe(5);
  })
});
