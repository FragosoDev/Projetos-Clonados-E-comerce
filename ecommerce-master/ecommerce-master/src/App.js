
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Footer from './components/footer/Footer'
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/products" element={ <Products />} />
        <Route path="/products/:id" element={ <Product />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/checkout" element={ <Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
