import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/product';
import wishlistReducer from './slices/wishlist';
import authReducer from './slices/user';
import cartReducer from './slices/cart';
import {createWrapper } from 'next-redux-wrapper';


const initStore = () => {
  return configureStore({ 
    reducer: {
      products: productReducer, 
      wishlists: wishlistReducer, 
      auth: authReducer, 
      cart: cartReducer  
    }
  })
}

export const wrapper = createWrapper(initStore, { debug: true });
