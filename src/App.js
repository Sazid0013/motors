
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Product from './Pages/Shared/Product/Product';
import Review from './Pages/Review/Review';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div >
   <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="product" element={<Product />} />
        <Route path="review" element={<Review />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
