import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';
import React from 'react'
import Signin from './Component/Signin'
import Header from './Header'
import Home from './Component/Home';
import "./App.css"
import Profile from './Component/Profile';
import Product from './Component/Product';
import Catalogue from './Component/catalogue';
import Login from './Component/Login';


const App = () => {
  return (
    <>
    <Header />
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Catalogue' element={<Catalogue/>} />
      </Routes>
    

    </>
  )
}

export default App