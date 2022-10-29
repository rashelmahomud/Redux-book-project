import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Product from './components/Home/Product';
import Service from './components/Home/Service';
import Navber from './components/Shared/Navber';
import Error from './components/Shared/Error';
import AddBooks from './features/Books/AddBooks';
import BooksView from './features/Books/BooksView';
import EditBooks from './features/Books/EditBooks';
import Footer from './components/Shared/Footer';
function App() {
  return (
    <div className="App">
      <Navber />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/Book' element={<BooksView />}></Route>
        <Route path='/edit' element={<EditBooks />}></Route>
        <Route path='/addBook' element={<AddBooks />}></Route>



        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
