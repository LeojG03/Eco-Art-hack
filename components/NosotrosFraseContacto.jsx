'use client';

import React from 'react';

export default function NosotrosFraseContacto() {
  return (
    <>
      {/* Sección Frase Inspiradora */}
      <section id="frase" className="py-16 px-5 text-center" style={{backgroundColor: '#f5f3ef'}}>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-italic text-[#555] leading-relaxed">
            "Donde otros ven desecho, nosotros vemos arte y esperanza."
          </p>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-16 px-5 text-center" style={{backgroundColor: '#e6f2e6'}}>
        <div className="max-w-4xl mx-auto">
          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a7a2a] mb-6 tracking-wide">
            Contáctanos
          </h2>
          
          {/* Descripción */}
          <p className="text-lg text-[#4a4033] mb-8 leading-relaxed">
            Escríbenos a <a 
              href="mailto:info@ecoart.com" 
              className="text-[#2a7a2a] font-semibold hover:text-[#c7a17a] transition-colors duration-300"
            >
              info@ecoart.com
            </a> o
            síguenos en nuestras redes:
          </p>

          {/* Lista de Redes Sociales */}
          <ul className="flex justify-center gap-6 flex-wrap">
            <li>
              <a 
                href="#" 
                className="text-[#2a7a2a] font-semibold hover:text-[#c7a17a] transition-colors duration-300 text-lg"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-[#2a7a2a] font-semibold hover:text-[#c7a17a] transition-colors duration-300 text-lg"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-[#2a7a2a] font-semibold hover:text-[#c7a17a] transition-colors duration-300 text-lg"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
