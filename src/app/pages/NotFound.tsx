import React from 'react';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <section className="w-full py-32 px-8 md:px-20" style={{ backgroundColor: '#F5EDE3', minHeight: '60vh' }}>
      <div className="max-w-[1200px] mx-auto w-full text-center">
        <h1 
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: '#1B2B4B',
            fontSize: '72px',
            marginBottom: '24px'
          }}
        >
          404
        </h1>
        <p 
          style={{ 
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            color: '#1B2B4B',
            fontSize: '24px',
            marginBottom: '32px'
          }}
        >
          Página no encontrada
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
  );
}
