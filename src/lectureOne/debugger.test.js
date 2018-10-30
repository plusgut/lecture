import { addition, additionCurry } from './debugger';

describe("lectureOne", () => {
  it('addition results in correct value', () => {
    const result = addition('0' , '1');
    expect(result).toBe(1);

    expect(addition('2' , '2')).toBe(4);
    expect(addition('0' , '-1')).toBe(-1);
  });

  it('multiplication with not-number', () => {
    expect(() => {
      additionCurry('foo');
    }).toThrow(new Error('Invalid parameter'))
  });

  it('when addition is called with just one parameter, then we can call the result', () => {
    const addTwo = additionCurry(2);
    console.log(addTwo(4))// 6
    addTwo(5) // 7
    
    expect(additionCurry('1')('4')).toBe(5);
  })
});
