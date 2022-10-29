import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: 'people Bangladesh', author: 'Rashel Mahomud' },
        { id: 2, title: 'Love Bangladesh', author: 'Tohi Mahomud' },
        { id: 3, title: 'Love Bangladesh', author: 'Tohi Mahomud' },
    ]
};


export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
    }
});

export const { showBooks, addBooks } = booksSlice.actions;

export default booksSlice.reducer;

