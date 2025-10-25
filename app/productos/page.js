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
      
      {/* Header Section */}
      <section className="py-8 px-5" style={{backgroundColor: '#fffaf4'}}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#3e2f1c] margin-down-20">
              Nuestros Productos
            </h2>
            <a 
              href="/subir-producto"
              className="bg-[#c7a17a] px-6 py-3 rounded-[25px] font-semibold transition-all duration-300 hover:bg-[#b48a68] hover:scale-105 hover:shadow-lg inline-block"
              style={{
                boxShadow: '0 4px 15px rgba(80, 50, 40, 0.2)',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '1.4',
                minWidth: '180px',
                textAlign: 'center',
                display: 'inline-block'
              }}
            >
              ➕ Vender Producto
            </a>
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