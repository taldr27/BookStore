import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Books from './pages/Books';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>

  );
}

export default App;
