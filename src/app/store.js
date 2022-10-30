import { configureStore } from '@reduxjs/toolkit';
import BooksSlice from '../features/Books/BooksSlice';
import productsSlice from '../features/services/productsSlice';

const store = configureStore({
  reducer: {
    booksReducer: BooksSlice,
    productReducer: productsSlice,
  }
})

export default store;
