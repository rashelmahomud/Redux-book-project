import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBooks } from './BooksSlice';

const BooksView = () => {

    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();

    const handelDeleteBook = (id) => {
        dispatch(deleteBooks(id));
    }

    return (
        <div>
            <h2 className='my-5 text-4xl'>List Of Books</h2>
            <div>
                <table className='mx-auto border border-collapse border'>
                    <thead className=''>
                        <tr className=''>
                            <th className='border p-5'>ID</th>
                            <th className='border p-5'>Title</th>
                            <th className='border p-5'>Author</th>
                            <th className='border p-5'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {books && books.map((book) => {
                            const { id, title, author } = book;
                            return <tr key={book.id} className='border'>
                                <td className='border p-5'>{id}</td>
                                <td className='border p-5'>{title}</td>
                                <td className='border p-5'>{author}</td>
                                <td className='border p-5'>
                                    <Link to='/edit' state={{id,title,author}}><button className='btn btn-xs btn-outline btn-info mx-2'>Edit</button></Link>


                                    <button onClick={() => handelDeleteBook(id)} className='btn btn-xs btn-outline btn-info'>Delete</button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BooksView;