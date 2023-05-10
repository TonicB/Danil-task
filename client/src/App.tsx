import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Cart from './pages/Cart';
import Create from './pages/Create';
import Products from './pages/Products';
import { Provider } from 'react-redux';
import { store } from './storeRedax';

function App() {
  return (
    <Provider store={store}>
    <header>
      <Link to="/">Products</Link>
      <Link to="/create">Create</Link>
      <Link to="/cart">Cart</Link>
      <Routes>
      <Route path="/" element={<Products />} />
      <Route  path="/create" element={<Create />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </header>
    </Provider>
  );
}

export default App;
