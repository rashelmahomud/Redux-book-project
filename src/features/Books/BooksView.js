import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {

    const books = useSelector((state) => state.booksReducer.books);

    return (
        <div>
            <h2 className='my-5'>List Of Books</h2>
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
                            return <tr key={book.id} className='border'>
                                <td className='border p-5'>{book.id}</td>
                                <td className='border p-5'>{book.title}</td>
                                <td className='border p-5'>{book.author}</td>
                                <td className='border p-5'>
                                    <button className='btn btn-xs btn-outline btn-info mx-2'>Edit</button>
                                    <button className='btn btn-xs btn-outline btn-info'>Deleter</button>
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