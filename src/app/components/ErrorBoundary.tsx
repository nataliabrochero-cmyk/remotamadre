import React from 'react';
import { Link, useRouteError } from 'react-router';

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5EDE3' }}>
      <nav className="w-full px-8 md:px-20 py-6">
        <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
          <Link 
            to="/"
            className="text-2xl"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 700,
              color: '#1B2B4B',
              textDecoration: 'none'
            }}
          >
            Remota Madre
          </Link>
        </div>
      </nav>

      <section className="flex-1 w-full py-32 px-8 md:px-20" style={{ backgroundColor: '#F5EDE3' }}>
        <div className="max-w-[1200px] mx-auto w-full text-center">
          <h1 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: '#1B2B4B',
              fontSize: '48px',
              marginBottom: '24px'
            }}
          >
            Algo salió mal
          </h1>
          <p 
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: '#1B2B4B',
              fontSize: '18px',
              marginBottom: '32px'
            }}
          >
            Lo sentimos, ocurrió un error inesperado.
          </p>
          <Link 
            to="/"
            style={{ 
              backgroundColor: '#C94F2C',
              color: '#F5EDE3',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              borderRadius: '4px',
              padding: '12px 32px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Volver al inicio
          </Link>
        </div>
      </section>

      <footer className="w-full py-12 px-8 md:px-20" style={{ backgroundColor: '#1B2B4B' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          <p 
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: '#F5EDE3',
              opacity: 0.5,
              fontSize: '12px',
              textAlign: 'center'
            }}
          >
            © 2026 Remota Madre
          </p>
        </div>
      </footer>
    </div>
  );
}
