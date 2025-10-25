import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionPasos from '@/components/SectionPasos';
import SectionComprarVender from '@/components/SectionComprarVender';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionPasos />
      <SectionComprarVender />
      <Footer />
    </>
  );
}
