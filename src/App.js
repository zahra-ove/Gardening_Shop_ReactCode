import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
