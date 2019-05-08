function multiplication() {
  
}
function evenmultiplication() {
  
}
function primemultiplication() {
  
}
function oneAbovemultiplication() {
  
}
function allAbovemultiplication() {
  
}
function sum() {
  
}

describe('lectureThree', () => {
  describe('multiplication', () => {
    it('by two', () => {
      const result = multiplication([1, 2, 3], 2);
      expect(result).toEqual([2, 4, 6]);
    });

    it('by three', () => {
      const result = multiplication([1, 2], 3);
      expect(result).toEqual([3, 6]);
    });
  });

  describe('even numbers', () => {
    it('return only the even numbers', () => {
      const result = even([1, 2, 3, 4]);
      expect(result).toEqual([2, 4]);
    });

    it('return only the even numbers', () => {
      const result = even([6, 7, 8, 9]);
      expect(result).toEqual([6, 8]);
    });
  });

  describe('prime number', () => {
    it('return the first prime number', () => {
      const result = prime([0, 1, 2, 3]);
      expect(result).toEqual(2);
    });

    it('return the first prime number', () => {
      const result = prime([4, 5, 6, 7]);
      expect(result).toEqual(5);
    })
  });

  describe('is one number above (or equal)', () => {
    it('none above hundred', () => {
      const result = oneAbove([0, 1, 2, 3], 100);
      expect(result).toEqual(false);
    });

    it('all above hundred', () => {
      const result = oneAbove([0, 1, 2, 3, 100], 100);
      expect(result).toEqual(true);
    });


    it('fifty', () => {
      const result = oneAbove([0, 1, 2, 3, 90], 50);
      expect(result).toEqual(true);
    });
  });

  describe('are all numbers above (or equal)', () => {
    it('not all legal', () => {
      const result = allAbove([18, 19, 20, 16], 18);
      expect(result).toEqual(false);
    });

    it('all legal', () => {
      const result = allAbove([18, 19, 20, 18], 18);
      expect(result).toEqual(true);
    });
  });

  describe('sum', () => {
    it('should be 6', () => {
      const result = sum([1, 2, 3]);
      expect(result).toEqual(6);
    });

    it('should be 6', () => {
      expect(() => {
        sum([1, 2, 3, 'string']);
      }).toThrow(new Error('Invalid'));
    });
  });
});
