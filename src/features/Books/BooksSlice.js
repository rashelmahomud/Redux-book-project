import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: 'people Bangladesh', author: 'Rashel Mahomud' },
        { id: 2, title: 'Love india', author: 'Tohi Mahomud' },
        { id: 3, title: 'Love Bangladesh', author: 'Khan Mahomud' },
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

        updateBooks: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);

            if(isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }

        },


        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id)
        },
    }
});

export const { showBooks, addBooks, deleteBooks,updateBooks } = booksSlice.actions;

export default booksSlice.reducer;

