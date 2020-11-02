import React, { FC } from 'react';
import { CartItem as CartItemType } from './types';

type Props = {
  key: string;
  item: CartItemType;
};

const CartItem: FC<Props> = ({ item }) => {
  return (
    <div className='cart-item-container'>
      <div className='cart-item-image'>
        <img src={item.img} alt={item.title} />
      </div>
      <div className='cart-item-details'>
        <h5>{item.title}</h5>
        <h6>{item.price}</h6>
        <button>remove</button>
      </div>
      <div className='cart-item-count'>1</div>
    </div>
  );
};

export default CartItem;
