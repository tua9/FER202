
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PizzaDetail from './pages/PizzaDetail';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
