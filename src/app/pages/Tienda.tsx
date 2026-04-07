import React from 'react';
import imgArtboard2Copy81 from "../../imports/Frame2/c0191654ab9a8c782ae50365db126aab65718bd4.png";
import imgArtboard2Copy91 from "../../imports/Frame3/65264e7c7d429c70afa3911d5d9615056675f986.png";

export function Tienda() {
  return (
    <>
      {/* Header Section */}
      <section className="w-full py-20 px-8 md:px-20" style={{ backgroundColor: '#1B2B4B' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          <h1 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: '#F5EDE3',
              fontSize: '4rem',
              marginBottom: '16px'
            }}
          >
            Tienda
          </h1>
          <p 
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: '#E8C4B2',
              fontSize: '18px'
            }}
          >
            Recursos visuales imprimibles, diseñados para el día a día real.
          </p>
        </div>
      </section>

      {/* Why Buy Here Section */}
      <section className="w-full py-20 px-8 md:px-20" style={{ backgroundColor: '#E8C4B2' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          <h2 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: '#1B2B4B',
              fontSize: '2rem',
              marginBottom: '24px'
            }}
          >
            ¿Por qué comprar acá?
          </h2>
          <p 
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: '#1B2B4B',
              fontSize: '18px',
              lineHeight: '1.7'
            }}
          >
            Cuando hacés click en un producto vas a ser redireccionada a Gumroad, la plataforma que elegí para gestionar las ventas. La elegí porque me permite seguir mejorando los archivos y enviarte cada actualización automáticamente, sin que tengas que pagar de nuevo. Una sola compra, mejoras para siempre.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-20 px-8 md:px-20" style={{ backgroundColor: '#F5EDE3' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Section Label */}
          <p 
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: '#1B2B4B',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '48px'
            }}
          >
            PRODUCTOS
          </p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Afiches Emocionales */}
            <div 
              style={{ 
                backgroundColor: 'white',
                border: '1px solid #E5E5E5',
                borderRadius: '4px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img 
                src={imgArtboard2Copy81}
                alt="Afiches Emocionales"
                style={{ 
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '24px'
                }}
              />
              <h3 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  color: '#1B2B4B',
                  fontSize: '24px',
                  marginBottom: '12px'
                }}
              >
                Afiches Emocionales
              </h3>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  flex: 1
                }}
              >
                Para ayudar a tu hijo/a a nombrar lo que siente y entender sus emociones, con un entorno que acompaña.
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: '#C94F2C',
                  fontSize: '20px',
                  marginBottom: '16px'
                }}
              >
                $10
              </p>
              <a 
                href="https://remotamadre.gumroad.com/l/afiches-emocionales"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: '#C94F2C',
                  color: '#F5EDE3',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  borderRadius: '4px',
                  padding: '12px 24px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'opacity 0.2s'
                }}
                className="hover:opacity-90"
              >
                Ver producto
              </a>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  opacity: 0.4,
                  fontSize: '11px',
                  textAlign: 'center',
                  marginTop: '8px'
                }}
              >
                *Tienda en Gumroad
              </p>
            </div>

            {/* Card 2 - Afiches Educativos */}
            <div 
              style={{ 
                backgroundColor: 'white',
                border: '1px solid #E5E5E5',
                borderRadius: '4px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img 
                src={imgArtboard2Copy91}
                alt="Afiches Educativos"
                style={{ 
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '24px'
                }}
              />
              <h3 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  color: '#1B2B4B',
                  fontSize: '24px',
                  marginBottom: '12px'
                }}
              >
                Afiches Educativos
              </h3>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  flex: 1
                }}
              >
                Aprendizaje visual para el cuarto, la cocina, donde quieras. Sin apps, sin pantallas.
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: '#C94F2C',
                  fontSize: '20px',
                  marginBottom: '16px'
                }}
              >
                $10
              </p>
              <a 
                href="https://remotamadre.gumroad.com/l/afiches-educativos"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: '#C94F2C',
                  color: '#F5EDE3',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  borderRadius: '4px',
                  padding: '12px 24px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'opacity 0.2s'
                }}
                className="hover:opacity-90"
              >
                Ver producto
              </a>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  opacity: 0.4,
                  fontSize: '11px',
                  textAlign: 'center',
                  marginTop: '8px'
                }}
              >
                *Tienda en Gumroad
              </p>
            </div>

            {/* Card 3 - Diario Volver a mí */}
            <div 
              style={{ 
                backgroundColor: 'white',
                border: '1px solid #E5E5E5',
                borderRadius: '4px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img 
                src="/volver-a-mi.png"
                alt="Diario Volver a mí"
                style={{ 
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '24px'
                }}
              />
              <h3 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  color: '#1B2B4B',
                  fontSize: '24px',
                  marginBottom: '12px'
                }}
              >
                Diario Volver a mí
              </h3>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  flex: 1
                }}
              >
                Para las que en algún momento dejaron de saber quiénes eran. Un diario de journaling para reencontrarte.
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: '#C94F2C',
                  fontSize: '20px',
                  marginBottom: '16px'
                }}
              >
                $15
              </p>
              <a 
                href="https://remotamadre.gumroad.com/l/diario-volverami"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: '#C94F2C',
                  color: '#F5EDE3',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  borderRadius: '4px',
                  padding: '12px 24px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'opacity 0.2s'
                }}
                className="hover:opacity-90"
              >
                Ver producto
              </a>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  opacity: 0.4,
                  fontSize: '11px',
                  textAlign: 'center',
                  marginTop: '8px'
                }}
              >
                *Tienda en Gumroad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="w-full py-20 px-8 md:px-20" style={{ backgroundColor: '#F5EDE3' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Section Label */}
          <p 
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: '#1B2B4B',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '48px'
            }}
          >
            PACKS
          </p>

          {/* Packs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pack 1 - El entorno completo */}
            <div 
              style={{ 
                backgroundColor: 'white',
                border: '1px solid #E5E5E5',
                borderRadius: '4px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  color: '#1B2B4B',
                  fontSize: '24px',
                  marginBottom: '8px'
                }}
              >
                El entorno completo
              </h3>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  marginBottom: '12px',
                  opacity: 0.7
                }}
              >
                Afiches Emocionales + Afiches Educativos*
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  flex: 1
                }}
              >
                Para equipar el espacio de tu hijo/a de una sola vez. Emocional y educativo, todo junto.
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: '#C94F2C',
                  fontSize: '20px',
                  marginBottom: '16px'
                }}
              >
                $16
              </p>
              <a 
                href="https://remotamadre.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: '#C94F2C',
                  color: '#F5EDE3',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  borderRadius: '4px',
                  padding: '12px 24px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'opacity 0.2s'
                }}
                className="hover:opacity-90"
              >
                Ver producto
              </a>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  opacity: 0.4,
                  fontSize: '11px',
                  textAlign: 'center',
                  marginTop: '8px'
                }}
              >
                *Tienda en Gumroad
              </p>
            </div>

            {/* Pack 2 - Para los dos */}
            <div 
              style={{ 
                backgroundColor: 'white',
                border: '1px solid #E5E5E5',
                borderRadius: '4px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  color: '#1B2B4B',
                  fontSize: '24px',
                  marginBottom: '8px'
                }}
              >
                Para los dos
              </h3>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  marginBottom: '12px',
                  opacity: 0.7
                }}
              >
                Afiches Emocionales + Diario Volver a mí*
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  flex: 1
                }}
              >
                Porque la transformación no es solo del niño/a. Este pack acompaña a tu hijo/a y te acompaña a vos.
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: '#C94F2C',
                  fontSize: '20px',
                  marginBottom: '16px'
                }}
              >
                $20
              </p>
              <a 
                href="https://remotamadre.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: '#C94F2C',
                  color: '#F5EDE3',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  borderRadius: '4px',
                  padding: '12px 24px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'opacity 0.2s'
                }}
                className="hover:opacity-90"
              >
                Ver producto
              </a>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  opacity: 0.4,
                  fontSize: '11px',
                  textAlign: 'center',
                  marginTop: '8px'
                }}
              >
                *Tienda en Gumroad
              </p>
            </div>

            {/* Pack 3 - Todo Remota Madre */}
            <div 
              style={{ 
                backgroundColor: 'white',
                border: '1px solid #E5E5E5',
                borderRadius: '4px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  color: '#1B2B4B',
                  fontSize: '24px',
                  marginBottom: '8px'
                }}
              >
                Todo Remota Madre
              </h3>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  marginBottom: '12px',
                  opacity: 0.7
                }}
              >
                Afiches Emocionales + Afiches Educativos + Diario Volver a mí*
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  flex: 1
                }}
              >
                Para la que quiere empezar con todo y no sabe por dónde. La opción más completa.
              </p>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: '#C94F2C',
                  fontSize: '20px',
                  marginBottom: '16px'
                }}
              >
                $28
              </p>
              <a 
                href="https://remotamadre.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: '#C94F2C',
                  color: '#F5EDE3',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  borderRadius: '4px',
                  padding: '12px 24px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'opacity 0.2s'
                }}
                className="hover:opacity-90"
              >
                Ver producto
              </a>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  opacity: 0.4,
                  fontSize: '11px',
                  textAlign: 'center',
                  marginTop: '8px'
                }}
              >
                *Tienda en Gumroad
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
