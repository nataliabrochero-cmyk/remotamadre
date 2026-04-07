import React from 'react';

export function Shop() {
  // Redirect to Gumroad store
  React.useEffect(() => {
    window.location.href = 'https://remotamadre.gumroad.com';
  }, []);

  return (
    <section className="w-full py-32 px-8 md:px-20" style={{ backgroundColor: '#F5EDE3', minHeight: '60vh' }}>
      <div className="max-w-[1200px] mx-auto w-full text-center">
        <p 
          style={{ 
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            color: '#1B2B4B',
            fontSize: '18px'
          }}
        >
          Redirigiendo a la tienda...
        </p>
      </div>
    </section>
  );
}
