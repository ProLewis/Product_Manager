import './App.css';
import React, {useEffect} from 'react';
import axios from 'axios'
import ProductForm from './components/ProductForm';
import ProductNav from './components/ProductNav'

function App() {
  return (
    <div className="App">
      <ProductForm/>
      <ProductNav/>
    </div>
  );
}

export default App;
