import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';
import React from 'react'
import Signin from './Pages/Signin'
import Header from './Feature/Header'
import Home from './Pages/Home';
import "./App.css"
import Profile from './Pages/Profile';
import Product from './Pages/Product';
import Catalogue from './Pages/catalogue';
import Login from './Pages/Login';
import Footer from './Feature/Footer';
import BottomHeader from './Feature/BottomHeader';


const App = () => {
  return (
    <>
    <Header />  
    <BottomHeader />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Catalogue' element={<Catalogue/>} />
      </Routes>
      
        <Footer />
    </>
  )
}

export default App