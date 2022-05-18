import './App.css';
import React, {useEffect} from 'react';
import axios from 'axios'
import ProductForm from './components/ProductForm';
import ProductNav from './components/ProductNav'
import { Route, Routes, Link } from 'react-router-dom';
import ProductDetail from './views/ProductDetail';
import ProductEdit from './views/ProductEdit';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><ProductForm/><ProductNav/></>}/>
        <Route path='/product/:id/edit' element={<ProductEdit/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
