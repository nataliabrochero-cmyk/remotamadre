import React from 'react';
import { Link, useLocation } from 'react-router';

export function Footer() {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="w-full py-12 px-8 md:px-20" style={{ backgroundColor: '#1B2B4B' }}>
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Top Row - Brand and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <Link 
            to="/"
            onClick={handleLogoClick}
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: '#F5EDE3',
              fontSize: '24px',
              textDecoration: 'none'
            }}
            className="hover:opacity-70 transition-opacity"
          >
            Remota Madre
          </Link>
          <div className="flex gap-8">
            <a 
              href="https://www.instagram.com/remotamadre/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: '#F5EDE3',
                textDecoration: 'none'
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
            <Link 
              to="/tienda"
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: '#F5EDE3',
                textDecoration: 'none'
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Tienda
            </Link>
          </div>
        </div>

        {/* Separator Line */}
        <div 
          style={{ 
            height: '1px',
            backgroundColor: '#F5EDE3',
            opacity: 0.2,
            marginBottom: '24px'
          }}
        />

        {/* Copyright */}
        <p 
          style={{ 
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            color: '#F5EDE3',
            opacity: 0.5,
            fontSize: '12px'
          }}
        >
          © 2026 Remota Madre. Hecho con intención desde Santa Fe, Argentina.
        </p>
        <p 
          style={{ 
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            color: '#F5EDE3',
            opacity: 0.4,
            fontSize: '12px',
            marginTop: '8px'
          }}
        >
          Tienda en Gumroad
        </p>
      </div>
    </footer>
  );
}