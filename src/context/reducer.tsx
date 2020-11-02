import React from 'react';
import { CartItem as CartItemType } from '../types';

type AppContextType = {
  items: CartItemType[];
  loading: boolean;
  totalPrice: number;
  totalItems: number;
  clearItems: () => void;
};

type Action = {
  type: string;
  payload?: number;
};

export const reducer = (state: AppContextType, action: Action) => {
  switch (action.type) {
    case 'CLEAR_ITEMS':
      return { ...state, items: [] };
    default:
      return state;
  }
};
