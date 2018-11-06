console.log('foo')

export function getProducts(requestName) {
  return fetch(`/api/${requestName}.json`)
           .then(response => response.json())
           .catch(() => {throw new Error('Invalid')});
}

export function getProductsSilent(requestName) {
  return fetch(`/api/${requestName}.json`)
           .then(response => response.json())
           .catch(() => []);
}


export default getProducts