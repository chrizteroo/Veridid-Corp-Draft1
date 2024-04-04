/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/ImageGallery.tsx
import React from 'react';
import dataEncryptionImage from '../assets/images/data-encryption.jpeg';
import mobileSecurityImage from '../assets/images/mobile-security.jpeg';
import anImage from '../assets/images/an.jpeg';
import twoFactorAuthenticationImage from '../assets/images/two-factor-authentication.jpeg';
import userAuthenticationImage from '../assets/images/user-authentication.jpeg';
import identityImage from '../assets/images/identity.jpeg';
import identity1Image from '../assets/images/identity1.jpeg';
import cybersecuritySolutionsImage from '../assets/images/cybersecurity-solutions.jpeg';

const ImageGallery = () => {
  return (
    <section className="image-gallery">
      <div className="gallery-item">
        <img src={dataEncryptionImage} alt="Data Encryption" className="gallery-img" />
        <div className="overlay">Data Encryption</div>
      </div>
      <div className="gallery-item">
        <img src={anImage} alt="An" className="gallery-img" />
        <div className="overlay">An</div>
      </div>
      <div className="gallery-item">
        <img src={twoFactorAuthenticationImage} alt="Two-factor Authentication" className="gallery-img" />
        <div className="overlay">Two-factor Authentication</div>
      </div>
      <div className="gallery-item">
        <img src={userAuthenticationImage} alt="User Authentication" className="gallery-img" />
        <div className="overlay">User Authentication</div>
      </div>
      <div className="gallery-item">
        <img src={identityImage} alt="Identity" className="gallery-img" />
        <div className="overlay">Identity</div>
      </div>
      <div className="gallery-item">
        <img src={identity1Image} alt="Identity1" className="gallery-img" />
        <div className="overlay">Identity1</div>
      </div>
      <div className="gallery-item">
        <img src={cybersecuritySolutionsImage} alt="Cybersecurity Solutions" className="gallery-img" />
        <div className="overlay">Cybersecurity Solutions</div>
      </div>
      {/* Add more image items as needed */}
    </section>
  );
};

export default ImageGallery;
