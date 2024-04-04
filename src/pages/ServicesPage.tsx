// src/pages/ServicesPage.tsx
import React from 'react';
import { FaLock, FaFingerprint, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Secure Authentication',
    description:
      'Leverage advanced biometric and multi-factor authentication technologies to ensure secure access to digital assets.',
    icon: <FaLock />,
  },
  {
    title: 'Identity Verification',
    description:
      'Utilize state-of-the-art identity verification systems to confirm the authenticity of individuals and organizations.',
    icon: <FaFingerprint />,
  },
  {
    title: 'Data Privacy and Protection',
    description:
      'Implement robust data privacy measures to safeguard sensitive information against unauthorized access and cyber threats.',
    icon: <FaShieldAlt />,
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
