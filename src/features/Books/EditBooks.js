import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBooks } from './BooksSlice'

const EditBooks = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);
    const handelSubite = (e) => {
        e.preventDefault();
        dispatch(updateBooks({ id, title, author }));
        navigate('/book');

    }

    return (
        <div>
            <h3>Editing Books</h3>
            <form onSubmit={handelSubite}>
                <div>
                    <label htmlFor='title' >Title: </label>
                    <input className="input input-bordered w-full max-w-xs" placeholder='Title' type='text' name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className='my-3'>
                    <label htmlFor='author' >Author: </label>
                    <input className="input input-bordered w-full max-w-xs" placeholder='Author' type='text' name='author' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <button className="btn btn-outline btn-accent" type='submit'>Update Book</button>
            </form>
        </div>
    );
};

export default EditBooks;