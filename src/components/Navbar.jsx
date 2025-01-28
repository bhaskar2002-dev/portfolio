import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 
import React from 'react';

const Navbar = () => {
  
  const linkedinUrl = "https://www.linkedin.com/in/bhaskar-bhimana-ba89ab265/"; 
  const emailUrl = "mailto:bhaskarbhimana2002@gmail.com"; 

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="text-3xl font-semibold text-white tracking-wider" style={{ fontFamily: 'Microsoft Sans Serif, sans-serif' }}>
          Bb
        </span> 
        
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={emailUrl} target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
