import { getProducts, getProductsSilent } from './promise';

describe('lectureTwo', () => {
  xdescribe('getProductsSilent', () => {
    it('wellformed', async () => {
      const products = await getProductsSilent('validRequest');

      expect(products).toEqual(["firstProduct", "secondProduct", "thirdProduct"]);
    });

    it('getProductsSilent with malformed json response', async () => {
      const products = await getProductsSilent('invalidResponse');

      expect(products).toEqual([]);
    });

    it('getProductsSilent with malformed json request', async () => {
      const products = await getProductsSilent('invalidRequest');

      expect(products).toEqual([]);
    });
  });

  xdescribe('getProducts', () => {
    it('wellformed', async () => {
      const products = await getProducts('validRequest');

      expect(products).toEqual(["firstProduct", "secondProduct", "thirdProduct"]);
    });

    it('getProducts with malformed json response', async () => {
      let expectedError;
      try {
        await getProducts('invalidResponse');
      } catch(error) {
        expectedError = error;
      }
      expect(expectedError).toEqual(new Error('Invalid'));
    });

    it('getProducts with malformed request', async () => {
      let expectedError;
      try {
        await getProducts('invalidRequest');
      } catch(error) {
        expectedError = error;
      }
      expect(expectedError).toEqual(new Error('Invalid'));
    });
  });
});
