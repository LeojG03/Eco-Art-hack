import React from 'react';
import Perfil from '@/components/Perfil';

export const metadata = {
  title: 'Perfil - EcoArt',
  description: 'Tu perfil de usuario en EcoArt',
};

export default function PerfilPage() {
  return (
    <div className="min-h-screen">
      <Perfil />
    </div>
  );
}
