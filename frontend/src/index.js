import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";

import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';
import NavBar from './landing_page/Navbar';
import Footer from "./landing_page/Footer";
import NotFound from './landing_page/NotFound';
import Login from './landing_page/login/login'

import { AuthProvider } from "./landing_page/AuthContext.js"; 
 
// import Home from 'dashboard/components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
  <NavBar/>
    <Routes>
      
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/support' element={<SupportPage/>} />
        <Route path='/login' element={<Login/>}/>
      
        <Route path='*' element={<NotFound/>} />
        
    </Routes>
    <Footer/>
  </BrowserRouter>
  </AuthProvider>
);