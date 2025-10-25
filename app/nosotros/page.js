import React from 'react';
import Header from '@/components/Header';
import Nosotros from '@/components/Nosotros';
import NosotrosValores from '@/components/NosotrosValores';
import NosotrosFraseContacto from '@/components/NosotrosFraseContacto';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nosotros - EcoArt',
  description: 'Conoce nuestra inspiración, valores y misión de transformar desechos en arte',
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f3ef'}}>
      <Header />
      <main className="pt-16">
        <Nosotros />
        <NosotrosValores />
        <NosotrosFraseContacto />
      </main>
      <Footer />
    </div>
  );
}
