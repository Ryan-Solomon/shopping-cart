import React from 'react';
import CartItems from './CartItems';
import Footer from './Footer';

const ShoppingCartContainer = () => {
  return (
    <main className='shopping-cart-container'>
      <header className='shopping-cart-header'>
        <h1>Your Bag</h1>
      </header>
      <section className='cart-items'>
        <CartItems />
      </section>
      <footer className='cart-footer'>
        <Footer />
      </footer>
    </main>
  );
};

export default ShoppingCartContainer;
