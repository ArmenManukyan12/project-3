import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Header from './Header';
import Products from './Products';
import Product from './Product';
import Footer from './Footer';
export default function App() {

  return (
    
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
        <Footer/>
        
        
    </div>
  );
}