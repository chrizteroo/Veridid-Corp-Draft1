import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <img src={logo} alt="Logo" className="h-10" />
      <nav>
        <Link to="/" className="mr-4">HomePage</Link>
        <Link to="/aboutPage" className="mr-4">AboutPage</Link>
        <Link to="/servicesPage" className="mr-4">ServicesPage</Link>
        <Link to="/contactPage" className="mr-4">ContactPage</Link>
      </nav>
    </header>
  );
};

export default Header;
