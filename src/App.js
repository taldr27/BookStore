import React from 'react';
// import { configureStore } from '@reduxjs/toolkit';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';

// const store = configureStore();
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
