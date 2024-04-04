// src/components/Footer.tsx
import React from 'react';
import facebookIcon from '../assets/icons/facebook-icon.png';
import instagramIcon from '../assets/icons/instagram-icon.png';
import xIcon from '../assets/icons/x-icon.png';
import youtubeIcon from '../assets/icons/youtube-icon.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-center space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook" className="footer-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className="footer-icon" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <img src={youtubeIcon} alt="YouTube" className="footer-icon" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src={xIcon} alt="X Icon" className="footer-icon" />
      </a>
      <p className="flex-grow text-center">© 2024 Veridid Corporation. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
