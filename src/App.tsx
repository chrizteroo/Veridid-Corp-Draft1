import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ImageGallery from './components/ImageGallery';
import ReadMoreGallery from './components/ReadMoreGallery';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 text-white p-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About Us</Link>
        <Link to="/services" className="mr-4">Services</Link>
        <Link to="/contact" className="mr-4">Contact</Link>
        <Link to="/image-gallery" className="mr-4">Image Gallery</Link>
        <Link to="/read-more-gallery" className="mr-4">Read More Gallery</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/read-more-gallery" element={<ReadMoreGallery />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
