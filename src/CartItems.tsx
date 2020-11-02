import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

type CartItem = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

const CartItems = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await fetch(
        'https://course-api.com/react-useReducer-cart-project'
      );
      const data = await res.json();
      setItems(data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  const renderedItems = items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return <>{renderedItems}</>;
};

export default CartItems;
