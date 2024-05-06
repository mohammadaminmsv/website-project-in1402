import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Signin from "./Pages/Signin";
import Header from "./Feature/Header";
import Home from "./Pages/Home";
import "./App.css";
import Profile from "./Pages/Profile";
import Product from "./Pages/Product";
import Catalogue from "./Pages/catalogue";
import Login from "./Pages/Login";
import Footer from "./Feature/Footer";
import BottomHeader from "./Feature/BottomHeader";
import Watch from "./Data/Watch";
import Laptop from "./Data/Laptop";
import Console from "./Data/Console";
import Mobile_Tablet from "./Data/Mobile_Tablet";
import Information from "./Profile-pages/Information";
import BuyInfo from "./Profile-pages/BuyInfo";
import FetchInfo from "./Information/FetchInfo";
import Cart from "./Pages/Cart";
import { useSelector } from "react-redux";
import Notfication from "./Components/Notfication";
import GetInfo from "./Information/GetInfo";

const App = () => {
  const notification1 = useSelector((state) => state.noti.notiaction);

  return (
    <>
      <Header />
      <BottomHeader />
      {notification1 && (
        <Notfication
          type={notification1.type}
          message={notification1.message}
        />
      )}
      <GetInfo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/product/watch" element={<Watch />} />
        <Route path="/product/laptop" element={<Laptop />} />
        <Route path="/product/console" element={<Console />} />
        <Route path="/product/mobile_tablet" element={<Mobile_Tablet />} />
        <Route path="/Profile/Information" element={<Information />} />
        <Route path="/Profile/BuyInfo" element={<BuyInfo />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
