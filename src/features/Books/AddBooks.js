import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from './BooksSlice';

const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

    const handelSubite = (e) => {
        e.preventDefault();
        const book = { id: numberOfBooks + 1, title, author };
        dispatch(addBooks(book))
        navigate('/book', {replace: true})
    }
    return (
        <div>
            <h1 className='text-3xl'>ADD BOOKS</h1>
            <form onSubmit={handelSubite}>
                <div>
                    <label htmlFor='title' >Title: </label>
                    <input className="input input-bordered w-full max-w-xs" placeholder='Title' type='text' name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className='my-3'>
                    <label htmlFor='author' >Author: </label>
                    <input className="input input-bordered w-full max-w-xs" placeholder='Author' type='text' name='author' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <button className="btn btn-outline btn-accent" type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;