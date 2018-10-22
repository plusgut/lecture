describe("lectureOne", () => {
  it('multiplication by 0, always leads to zero', () => {
    const result = addition('0' , '1');
    expect(result).toBe(0);

    expect(addition('0' , '2')).toBe(0);
    expect(addition('0' , '-1')).toBe(0);
  });

  xit('multiplication with not-number', () => {
    expect(() => {
      addition('foo');
    }).toThrowException(new Error('Invalid parameter'))
  });
});
