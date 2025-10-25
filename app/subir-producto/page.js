import React from 'react';
import SubirProducto from '@/components/SubirProducto';

export const metadata = {
  title: 'Subir Producto - EcoArt',
  description: 'Sube tu arte sostenible a la plataforma EcoArt',
};

export default function SubirProductoPage() {
  return (
    <div className="min-h-screen">
      <SubirProducto />
    </div>
  );
}
