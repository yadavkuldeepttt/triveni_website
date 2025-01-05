import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/header';
import Home from "./pages/home.jsx"
import Footer from './components/footer.jsx';
import AboutPage from './pages/about.jsx';
import ServicesPage from './pages/services.jsx';
import Contact from './pages/contact.jsx';
import Destination from './pages/destination.jsx';

class App extends Component {
  render() {
    return (
      <div className="App ">
            <Header/>
          <div className=''>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/destinations" element={<Destination/>} />
            
          </Routes>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
