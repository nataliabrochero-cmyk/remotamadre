import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export function Root() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5EDE3' }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}