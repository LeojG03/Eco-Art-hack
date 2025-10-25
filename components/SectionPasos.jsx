import React from 'react';

export default function SectionPasos() {
  return (
    <section id="pasos" className="py-16 px-5 text-center" style={{backgroundColor: '#f7f4f0'}} data-animar>
      {/* Header */}
      <h2 className="text-[#3e2f27] text-3xl md:text-4xl font-bold mb-3">
        Comprar arte nunca fue tan sencillo
      </h2>
      <p className="text-[#6b5a4a] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
        Conecta con artistas, apoya la sostenibilidad y lleva arte único a tu
        hogar.
      </p>

      {/* Pasos Container */}
      <div className="flex justify-center flex-wrap gap-8 max-w-6xl mx-auto">
        {/* Paso 1 */}
        <div 
          className="bg-white rounded-[20px] p-6 max-w-[300px] text-center transition-all duration-300 hover:-translate-y-2"
          style={{boxShadow: '0 4px 10px rgba(226, 212, 204, 0.15)'}}
        >
          <h3 className="text-[#3e2f27] text-xl font-semibold mb-3">
            1. Explora las obras
          </h3>
          <p className="text-[#6b5a4a] text-sm leading-relaxed">
            Descubre piezas únicas hechas con materiales reciclados por artistas
            locales. Encuentra inspiración en cada creación.
          </p>
        </div>

        {/* Paso 2 */}
        <div 
          className="bg-white rounded-[20px] p-6 max-w-[300px] text-center transition-all duration-300 hover:-translate-y-2"
          style={{boxShadow: '0 4px 10px rgba(255, 255, 255, 0.15)'}}
        >
          <h3 className="text-[#3e2f27] text-xl font-semibold mb-3">
            2. Contacta al vendedor
          </h3>
          <p className="text-[#6b5a4a] text-sm leading-relaxed">
            Comunícate con el artista para acordar detalles y resolver tus
            dudas. Todo desde nuestra plataforma, de forma segura.
          </p>
        </div>

        {/* Paso 3 */}
        <div 
          className="bg-white rounded-[20px] p-6 max-w-[300px] text-center transition-all duration-300 hover:-translate-y-2"
          style={{boxShadow: '0 4px 10px #fff5f0'}}
        >
          <h3 className="text-[#3e2f27] text-xl font-semibold mb-3">
            3. Recibe tu arte
          </h3>
          <p className="text-[#6b5a4a] text-sm leading-relaxed">
            Acuerden un punto de encuentro o envío, y lleva contigo una obra que
            no solo decora, sino que también cuida el planeta.
          </p>
        </div>
      </div>
    </section>
  );
}
