import React from 'react';
import Header from '@/components/Header';
import Tutoriales from '@/components/Tutoriales';
import Tutoriales2 from '@/components/Tutoriales2';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Tutoriales - EcoArt',
  description: 'Aprende a crear arte reciclado con nuestros tutoriales paso a paso',
};

export default function TutorialesPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f3ef'}}>
      <Header />
      <main className="pt-16">
        <Tutoriales />
        <Tutoriales2 />
      </main>
      <Footer />
    </div>
  );
}
