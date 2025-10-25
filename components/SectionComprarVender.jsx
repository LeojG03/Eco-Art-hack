import React from 'react';

export default function SectionComprarVender() {
  return (
    <section id="comprar-vender" className="py-20 px-5 text-center" style={{backgroundColor: '#fffaf5'}} data-animar>
      {/* Header */}
      <h2 className="text-[#3e2f27] text-3xl md:text-4xl font-bold mb-5">
        Tú decides: ¿Comprar o Vender arte?
      </h2>
      <p className="text-[#6b5a4a] text-lg md:text-xl mb-12 max-w-3xl mx-auto">
        EcoArt es un espacio donde los creadores y amantes del arte se
        encuentran. Ya sea que quieras compartir tus obras o descubrir nuevas,
        aquí puedes hacerlo.
      </p>

      {/* Acciones Container */}
      <div className="flex justify-center flex-wrap gap-10 max-w-6xl mx-auto">
        {/* Acción Comprar */}
        <div 
          className="bg-white rounded-[20px] p-9 max-w-[400px] text-center transition-all duration-300 hover:-translate-y-2"
          style={{boxShadow: '0 5px 15px rgba(62, 47, 39, 0.1)'}}
        >
          <h3 className="text-[#3e2f27] text-xl font-semibold mb-3">
            🛒 Comprar arte
          </h3>
          <p className="text-[#6b5a4a] text-sm leading-relaxed mb-4">
            Encuentra piezas únicas hechas con materiales reciclados. Cada obra
            cuenta una historia, hecha con propósito y creatividad.
          </p>
          <a 
            href="/productos" 
            className="inline-block bg-[#a6795d] text-white font-semibold px-6 py-3 rounded-[10px] transition-all duration-300 hover:bg-[#8b624b] hover:scale-105"
            style={{textDecoration: 'none', boxShadow: '0 3px 10px rgba(80, 50, 40, 0.15)'}}
          >
            Explorar productos
          </a>
        </div>

        {/* Acción Vender */}
        <div 
          className="bg-white rounded-[20px] p-9 max-w-[400px] text-center transition-all duration-300 hover:-translate-y-2"
          style={{boxShadow: '0 5px 15px rgba(62, 47, 39, 0.1)'}}
        >
          <h3 className="text-[#3e2f27] text-xl font-semibold mb-3">
            🎨 Vender tus creaciones
          </h3>
          <p className="text-[#6b5a4a] text-sm leading-relaxed mb-4">
            Comparte tus obras con el mundo. Regístrate, sube tus piezas y
            permite que otros conecten con tu visión artística.
          </p>
          <a 
            href="/vender" 
            className="inline-block bg-[#a6795d] text-white font-semibold px-6 py-3 rounded-[10px] transition-all duration-300 hover:bg-[#8b624b] hover:scale-105"
            style={{textDecoration: 'none', boxShadow: '0 3px 10px rgba(80, 50, 40, 0.15)'}}
          >
            Comenzar a vender
          </a>
        </div>
      </div>
    </section>
  );
}
