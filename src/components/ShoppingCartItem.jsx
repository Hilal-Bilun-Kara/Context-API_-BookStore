import React from 'react';
import { ScCartItem, ScCartItemDetails } from './scParts';
import { useCart } from '../contexts/CartContext';

const Item = (props) => {
  const { removeItem } = useCart();
  return (
    <ScCartItem>
      <img
        crossOrigin="anonymous"
        src={props.image}
        alt={`${props.title} book`}
      />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
