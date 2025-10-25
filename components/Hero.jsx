'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="hero min-h-[90vh] flex flex-col justify-center items-center text-center px-8" style={{background: 'linear-gradient(to bottom, #f5f3ef, #ede9e3)'}} id="inicio">
      {/* Imagen Banner */}
      <section 
        className="imagen-banner w-full h-[500px] mb-12 rounded-[20px] overflow-hidden"
        style={{
          backgroundColor: '#e8e3dc',
          backgroundImage: 'url("../htmls/perro.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
        }}
      ></section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#3e2f1c] mb-8 leading-tight tracking-wide">
          El arte de dar nueva vida a lo olvidado
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#4a4033] mb-12 max-w-3xl mx-auto leading-relaxed">
          En <strong className="text-[#c7a17a]">EcoArt</strong> creemos que crear es más que transformar
          materiales: es transformar emociones. Cada pieza nace del deseo de
          reciclar, inspirar y evocar sentimientos a través de lo que otros llaman
          desecho.
        </p>

        {/* CTA Button */}
        <a href="/nosotros">
          <button className="bg-[#c7a17a] hover:bg-[#b48a68] text-white text-lg font-semibold px-8 py-4 rounded-[25px] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" style={{boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)'}}>
            Conoce nuestra historia
          </button>
        </a>
      </div>
    </section>
  );
}
