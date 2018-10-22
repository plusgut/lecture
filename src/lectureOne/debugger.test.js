describe("lectureOne", () => {
  it('multiplication by 0, always leads to zero', () => {
    const result = multiply(0 , 1);
    expect(result).toBe(0);

    expect(multiply(0 , 2)).toBe(0);
    expect(multiply(0 , -1)).toBe(0);
  });
});
