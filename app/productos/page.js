'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import DivProductosContainer from '@/components/DivProductosContainer';
import Footer from '@/components/Footer';

export default function Productos() {
  const [filtro, setFiltro] = useState('todos');

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f3ef'}}>
      <Header />
      
      {/* Filtros */}
      <section className="py-8 px-5" style={{backgroundColor: '#fffaf4'}}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#3e2f1c] mb-6 text-center">
            Filtros de Búsqueda
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => setFiltro('todos')}
              className={`px-6 py-2 rounded-[25px] transition-all duration-300 ${
                filtro === 'todos' 
                  ? 'bg-[#c7a17a] text-white' 
                  : 'bg-white text-[#3e2f1c] hover:bg-[#f0e6dc]'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => setFiltro('esculturas')}
              className={`px-6 py-2 rounded-[25px] transition-all duration-300 ${
                filtro === 'esculturas' 
                  ? 'bg-[#c7a17a] text-white' 
                  : 'bg-white text-[#3e2f1c] hover:bg-[#f0e6dc]'
              }`}
            >
              Esculturas
            </button>
            <button 
              onClick={() => setFiltro('joyeria')}
              className={`px-6 py-2 rounded-[25px] transition-all duration-300 ${
                filtro === 'joyeria' 
                  ? 'bg-[#c7a17a] text-white' 
                  : 'bg-white text-[#3e2f1c] hover:bg-[#f0e6dc]'
              }`}
            >
              Joyería
            </button>
            <button 
              onClick={() => setFiltro('decoracion')}
              className={`px-6 py-2 rounded-[25px] transition-all duration-300 ${
                filtro === 'decoracion' 
                  ? 'bg-[#c7a17a] text-white' 
                  : 'bg-white text-[#3e2f1c] hover:bg-[#f0e6dc]'
              }`}
            >
              Decoración
            </button>
          </div>
        </div>
      </section>

      <main>
        <DivProductosContainer />
      </main>
      
      <Footer />
    </div>
  );
}