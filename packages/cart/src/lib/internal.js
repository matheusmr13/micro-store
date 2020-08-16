import schema from './schema';
import {
  Api
} from '@cmra/react';
const api = new Api(schema).build();

api.setCart({
  products: []
});
api.onAddProductToCartCalled((product) => {
  const products = api.getCart().products || [];
  api.setCart(
    Object.assign({
      products: [...products, product],
    })
  );
});

api.onRemoveProductFromCartCalled((productToRemove) => {
  const products = api.getCart().products || [];
  api.setCart(
    Object.assign({
      products: products.filter((product) => product.id !== productToRemove.id),
    })
  );
});

export default schema;