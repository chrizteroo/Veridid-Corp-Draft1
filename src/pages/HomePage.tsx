// src/pages/HomePage.tsx
import React from 'react';
import logo from '../assets/images/logo.png'; // Adjust the path to your logo image

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="logo-container">
        <img src={logo} alt="Veridid Corp Logo" className="logo" />
      </div>
      <h1 className="text-3xl font-bold">Welcome to Veridid Corp</h1>
      <p className="mt-4">Veridid Corp is a leading provider of digital identity solutions, committed to enhancing security and privacy in the digital world.</p>
      <p className="mt-2">Our mission is to empower individuals and organizations with cutting-edge technology that ensures secure and seamless verification of identities.</p>
    </div>
  );
};

export default HomePage;
