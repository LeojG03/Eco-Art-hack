'use client';

import React from 'react';

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 px-5 text-center" style={{backgroundColor: '#f5f3ef'}}>
      <div className="max-w-4xl mx-auto">
        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3e2f1c] mb-8 tracking-wide">
          Nuestra Inspiración
        </h2>

        {/* Contenido Principal */}
        <div className="space-y-6 text-lg leading-relaxed text-[#4a4033]">
          <p>
            Todo comenzó con una idea simple: ver belleza donde otros veían basura.
            En <strong className="text-[#c7a17a]">EcoArt</strong>, recogemos materiales plásticos y objetos
            olvidados para transformarlos en arte con alma. Buscamos que cada obra
            despierte conciencia, esperanza y una conexión más profunda con el
            planeta.
          </p>
          
          <p>
            Reciclar no es solo cuidar el medio ambiente, es también una forma de
            sanar, de recordar que todo —incluso lo roto— puede volver a tener
            valor.
          </p>
        </div>
      </div>
    </section>
  );
}
