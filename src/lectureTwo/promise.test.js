import { getProducts, getProductsSilent } from './promise';

describe('lectureTwo', () => {
  xdescribe('getProductsSilent', () => {
    it('getProducts', async () => {
      const products = await getProducts('validRequest');

      expect(products).toEqual(["firstProduct", "secondProduct", "thirdProduct"]);
    });

    it('getProducts with malformed json response', async () => {
      const products = await getProducts('invalidResponse');

      expect(products).toEqual([]);
    });

    it('getProducts with malformed json request', async () => {
      const products = await getProducts('invalidRequest');

      expect(products).toEqual([]);
    });
  });

  xdescribe('getProducts', () => {
    it('getProducts', async () => {
      const products = await getProducts('validRequest');

      expect(products).toEqual(["firstProduct", "secondProduct", "thirdProduct"]);
    });

    it('getProducts with malformed json response', async () => {
      expect(async () => {
        await getProducts('invalidResponse');
      }).toThrow(new Error('Invalid Response'));
    });

    it('getProducts with malformed request', async () => {
      expect(async () => {
        const products = await getProducts('invalidRequest');
      }).toThrow(new Error('Invalid Request'));
    });
  });
});
