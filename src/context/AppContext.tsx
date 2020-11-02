import React, { FC, ReactNode, useContext, useReducer } from 'react';
import { CartItem as CartItemType } from '../types';
import { reducer } from './reducer';

type AppContextType = {
  items: CartItemType[];
  loading: boolean;
  totalPrice: number;
  totalItems: number;
  clearItems: () => void;
};

const initialState = {
  items: [],
  loading: false,
  totalPrice: 0,
  totalItems: 0,
};

const AppContext = React.createContext<AppContextType>(initialState);

export const AppContextProvider: FC<ReactNode> = ({ children }) => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  const { items, loading, totalPrice, totalItems } = state;

  const clearItems = () => {
    // @ts-ignore
    dispatch({
      type: 'CLEAR_ITEMS',
    });
  };

  return (
    <AppContext.Provider
      value={{ items, loading, totalPrice, totalItems, clearItems }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook To Provide Context

export const useAppContext = () => {
  return useContext(AppContext);
};
