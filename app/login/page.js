import React from 'react';
import Login from '@/components/Login';

export const metadata = {
  title: 'Login - EcoArt',
  description: 'Inicia sesión o regístrate en EcoArt para comenzar a crear arte sostenible',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Login />
    </div>
  );
}
