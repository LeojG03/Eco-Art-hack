'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#fffaf4] z-[1000]" style={{boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'}}>
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-8 py-4">
        {/* Logo */}
        <div className="text-[1.6rem] font-semibold text-[#3e2f1c] tracking-wide">
          EcoArt
        </div>

        {/* Navigation */}
        <nav className="flex gap-8">
          <a 
            href="/" 
            className="relative text-[#4a4033] font-medium text-base transition-all duration-300 hover:text-[#3e2f1c] hover:scale-110 hover:tracking-wide group"
          >
            Inicio
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#c7a17a] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="/productos" 
            className="relative text-[#4a4033] font-medium text-base transition-all duration-300 hover:text-[#3e2f1c] hover:scale-110 hover:tracking-wide group"
          >
            Productos
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#c7a17a] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="/tutoriales" 
            className="relative text-[#4a4033] font-medium text-base transition-all duration-300 hover:text-[#3e2f1c] hover:scale-110 hover:tracking-wide group"
          >
            Tutoriales
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#c7a17a] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="/nosotros" 
            className="relative text-[#4a4033] font-medium text-base transition-all duration-300 hover:text-[#3e2f1c] hover:scale-110 hover:tracking-wide group"
          >
            Nosotros
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#c7a17a] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Perfil Button */}
        <a 
          id="perfil" 
          href="/perfil" 
          className="bg-[#c9c0b4] text-[#3e2f1c] px-4 py-2 rounded-[20px] font-medium transition-all duration-300 hover:bg-[#5c5c5b] hover:scale-105 hover:text-white ml-2.5 inline-block"
          style={{boxShadow: '0 4px 10px rgba(62, 47, 39, 0.2)'}}
        >
          👤 Perfil
        </a>
      </div>
    </header>
  );
}