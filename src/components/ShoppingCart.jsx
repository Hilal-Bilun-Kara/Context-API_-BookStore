import React from 'react';
import { ScCartCheckout } from './scParts';
import { useCart } from '../contexts/CartContext';

import Item from './ShoppingCartItem';

const ShoppingCart = (props) => {
  const { cart } = useCart();

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
