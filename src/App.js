import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/header';
import Home from "./pages/home.jsx"
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App ">
            <Header/>
          <div className='px-2 py-2'>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
