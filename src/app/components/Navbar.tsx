import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full px-8 md:px-20 py-6">
        <div 
          className="max-w-[1200px] mx-auto w-full footer-top"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Link 
            to="/"
            className="text-2xl"
            onClick={handleLogoClick}
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 700,
              color: '#1B2B4B',
              textDecoration: 'none',
              zIndex: 1001,
              position: 'relative'
            }}
          >
            Remota Madre
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex" style={{ gap: '32px' }}>
            <Link 
              to="/tienda"
              style={{ 
                fontFamily: "'DM Sans', sans-serif", 
                fontWeight: 400,
                color: '#1B2B4B',
                textDecoration: 'none'
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Tienda
            </Link>
            <Link 
              to="/sobre-mi"
              style={{ 
                fontFamily: "'DM Sans', sans-serif", 
                fontWeight: 400,
                color: '#1B2B4B',
                textDecoration: 'none'
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Sobre mí
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              zIndex: 1001,
              position: 'relative'
            }}
            aria-label="Open menu"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#1B2B4B' }} />
              <div style={{ width: '24px', height: '2px', backgroundColor: '#1B2B4B' }} />
              <div style={{ width: '24px', height: '2px', backgroundColor: '#1B2B4B' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#1B2B4B',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '48px'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '32px',
              right: '32px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color: '#F5EDE3',
              fontSize: '40px',
              lineHeight: 1,
              fontWeight: 300
            }}
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Menu Links */}
          <Link 
            to="/tienda"
            onClick={handleLinkClick}
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 700,
              color: '#F5EDE3',
              textDecoration: 'none',
              fontSize: '2rem'
            }}
          >
            Tienda
          </Link>
          <Link 
            to="/sobre-mi"
            onClick={handleLinkClick}
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 700,
              color: '#F5EDE3',
              textDecoration: 'none',
              fontSize: '2rem'
            }}
          >
            Sobre mí
          </Link>
        </div>
      )}
    </>
  );
}