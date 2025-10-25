'use client';

import React from 'react';

export default function NosotrosValores() {
  return (
    <section id="valores" className="py-16 px-5 text-center" style={{backgroundColor: '#f0f9f0'}}>
      <div className="max-w-6xl mx-auto">
        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2a7a2a] mb-12 tracking-wide">
          Nuestros Valores
        </h2>

        {/* Grid de Valores */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Valor 1: Creatividad */}
          <div 
            className="bg-white p-6 rounded-[10px] w-[200px] transition-all duration-300 hover:-translate-y-2"
            style={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'}}
          >
            <strong className="block text-[#2a7a2a] text-lg font-semibold mb-3">
              Creatividad
            </strong>
            <p className="text-[#4a4033] text-sm leading-relaxed">
              Transformamos lo ordinario en arte.
            </p>
          </div>

          {/* Valor 2: Sostenibilidad */}
          <div 
            className="bg-white p-6 rounded-[10px] w-[200px] transition-all duration-300 hover:-translate-y-2"
            style={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'}}
          >
            <strong className="block text-[#2a7a2a] text-lg font-semibold mb-3">
              Sostenibilidad
            </strong>
            <p className="text-[#4a4033] text-sm leading-relaxed">
              Cuidamos el planeta en cada proyecto.
            </p>
          </div>

          {/* Valor 3: Comunidad */}
          <div 
            className="bg-white p-6 rounded-[10px] w-[200px] transition-all duration-300 hover:-translate-y-2"
            style={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'}}
          >
            <strong className="block text-[#2a7a2a] text-lg font-semibold mb-3">
              Comunidad
            </strong>
            <p className="text-[#4a4033] text-sm leading-relaxed">
              Unimos manos y corazones.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
