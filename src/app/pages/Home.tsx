import React from 'react';
import { Link } from 'react-router';
import imgArtboard2Copy81 from "../../imports/Frame2/c0191654ab9a8c782ae50365db126aab65718bd4.png";
import imgArtboard2Copy91 from "../../imports/Frame3/65264e7c7d429c70afa3911d5d9615056675f986.png";
import imgFreepikPodesHacerQueEstaFoto27295134751 from "../../imports/Frame4/ab654f3bf0c5e9e60da025ccabd949f3190bab9c.png";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="hero-section flex-1 flex flex-col items-start justify-center w-full px-8 md:px-20" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1200px] mx-auto w-full text-left space-y-8">
          {/* Headline */}
          <h2 
            className="hero-headline text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif"
            }}
          >
            <span style={{ fontWeight: 700, color: '#C94F2C' }}>
            Soy una <span style={{ borderBottom: '3px solid #C94F2C', paddingBottom: '2px' }}>amiga</span> que viene a darte una mano y a{' '} </span>
            <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#C4517A' }}>
              hacerte la vida más fácil
            </span>
            <span style={{ fontWeight: 700, color: '#C94F2C' }}>
              {' '}desde el diseño.
            </span>
          </h2>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl"
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontWeight: 400,
              color: '#1B2B4B'
            }}
          >
            Recursos visuales imprimibles para madres reales.
          </p>

          {/* Button */}
          <div className="pt-4">
            <Link
              to="/tienda"
              className="px-8 py-4 hover:opacity-90 transition-opacity inline-block"
              style={{ 
                backgroundColor: '#C94F2C',
                color: '#F5EDE3',
                fontFamily: "'DM Sans', sans-serif", 
                fontWeight: 400,
                borderRadius: '4px',
                textDecoration: 'none'
              }}
            >
              Ver productos
            </Link>
          </div>
        </div>
      </main>

      {/* Text Section */}
      <section className="w-full py-20 px-8 md:px-20" style={{ backgroundColor: '#C4517A' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          <p 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontWeight: 400,
              color: '#F5EDE3',
              fontSize: '20px',
              lineHeight: 1.6
            }}
          >
            Si tenés poco tiempo y aun así querés estar presente, acá encontrás recursos visuales que enseñan solos. Para que el entorno haga parte del trabajo por vos.
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
          <div className="products-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
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
                $8
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
                Tienda en Gumroad
              </p>
            </div>

            {/* Card 2 */}
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
                $8
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
                Tienda en Gumroad
              </p>
            </div>

            {/* Card 3 */}
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
                src="https://images.unsplash.com/photo-1504520169123-768da2d62b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwbm90ZWJvb2slMjBtaW5pbWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc3NTUxNDM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                $12
              </p>
              <a 
                href="https://remotamadre.gumroad.com/l/gnzbqv"
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
                Tienda en Gumroad
              </p>
            </div>
          </div>

          {/* View All Link */}
          <Link 
            to="/tienda"
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: '#1B2B4B',
              fontSize: '16px',
              textDecoration: 'none'
            }}
            className="hover:opacity-70 transition-opacity"
          >
            Ver todos los productos →
          </Link>
        </div>
      </section>

      {/* Quién Soy Section */}
      <section className="w-full py-20 px-8 md:px-20" style={{ backgroundColor: '#E8C4B2' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="quien-soy-grid grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="quien-soy-image flex justify-center md:justify-start">
              <img 
                src={imgFreepikPodesHacerQueEstaFoto27295134751}
                alt="Natalia"
                style={{ 
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6">
              <h2 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  color: '#1B2B4B',
                  fontSize: '36px'
                }}
              >
                Hola, soy Natalia.
              </h2>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '18px',
                  lineHeight: 1.7
                }}
              >
                Diseñadora UX con 10 años de experiencia entendiendo cómo las personas piensan y sienten. Todo lo que encontrás acá nació de aplicar ese conocimiento a mi rol de madre: lo diseñé, lo probé y me funcionó antes de compartirlo.
              </p>
              <Link 
                to="/sobre-mi"
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#C94F2C',
                  fontSize: '16px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                className="hover:opacity-70 transition-opacity"
              >
                Conocé más sobre el proyecto →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
