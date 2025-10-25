'use client';

import React from 'react';

export default function Tutoriales() {
  return (
    <section className="tutoriales-header text-center mt-12 px-5 py-16" style={{backgroundColor: '#f5f3ef'}}>
      {/* Header Principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#3e2f1c] mb-4 tracking-wide">
        ♻️ Tutoriales de Arte Reciclado
      </h1>
      <p className="text-xl md:text-2xl text-[#4a4033] mb-12">
        Aprende a transformar residuos en arte lleno de vida 🌿
      </p>

      {/* Introducción Creativa */}
      <div 
        className="intro-creativa max-w-4xl mx-auto bg-[#fffaf4] rounded-[20px] p-8 text-lg leading-relaxed text-[#4a4033]"
        style={{boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'}}
      >
        En <strong className="text-[#c7a17a]">EcoArt</strong> creemos que la creatividad puede cambiar el
        mundo. Por eso, no solo te invitamos a descubrir y comprar obras hechas
        con materiales reciclados, sino también a
        <strong className="text-[#3e2f1c]"> crear las tuyas</strong>. Aquí encontrarás tutoriales sencillos,
        inspiradores y sostenibles para que
        <strong className="text-[#c7a17a]"> le des una segunda vida</strong> a tus desechos,
        transformándolos en arte, decoración o proyectos únicos que hablen de ti
        y del planeta que queremos construir. 🌎✨
      </div>
    </section>
  );
}
