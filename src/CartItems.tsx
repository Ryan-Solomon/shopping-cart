import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useAppContext } from './context/AppContext';

type CartItem = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

const CartItems = () => {
  const { items, loading } = useAppContext();

  const renderedItems = items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  if (loading) return <h1>Loading...</h1>;

  return <>{renderedItems}</>;
};

export default CartItems;
