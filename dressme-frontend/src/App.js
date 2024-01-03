import logo from './logo.svg';
import './App.css';

import Listcloth from './components/Listcloth';
import { useState,useEffect } from 'react';
import Addclothcategory from './cloth/Addclothcategory';
import ListClothCategory from './cloth/ListClothCategory';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editclothcategory from './cloth/Editclothcategory';
import ListCloths from './cloth/ListCloths';
import Addcloths from './cloth/Addcloths';
import Editcloths from './cloth/Editcloths';
import Searchfilter from './cloth/Searchfilter';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListClothCategory />}></Route>
          <Route path='/cloths' element={<ListCloths />}></Route>
          <Route path='/cloths/create' element={<Addcloths />}></Route>
          <Route path='/cloths/search' element={<Searchfilter />}></Route>
          <Route path='/cloths/edit/:c_id' element={<Editcloths />}></Route>
          <Route path='/clothcategory/create' element={<Addclothcategory />}></Route>
          <Route path='/clothcategory/edit/:cid' element={<Editclothcategory />}></Route> 
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
