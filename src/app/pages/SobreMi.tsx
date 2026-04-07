import React from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import imgFreepikAhoraPodemosHacerALa27296498971 from "../../imports/Frame5/0909e98b69bf93a138a3f7671907ca54c90ce462.png";

export function SobreMi() {
  return (
    <>
      {/* First Section - Two Column Layout */}
      <section className="w-full py-32 px-8 md:px-20" style={{ backgroundColor: '#F5EDE3' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Circular Photo */}
            <div className="flex justify-center md:justify-start">
              <ImageWithFallback
                src={imgFreepikAhoraPodemosHacerALa27296498971}
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
            <div>
              <h1 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  color: '#1B2B4B',
                  fontSize: '3.5rem',
                  marginBottom: '32px'
                }}
              >
                Hola, soy Natalia.
              </h1>
              <p 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: '#1B2B4B',
                  fontSize: '18px',
                  lineHeight: 1.7
                }}
              >
                Soy Natalia, diseñadora UX/UI con más de 10 años de experiencia creando productos digitales. Trabajé en equipos de tecnología entendiendo cómo las personas piensan, sienten y actúan frente a un producto, y cómo hacer que esa experiencia sea clara, útil y humana. Soy madre, trabajo de forma remota y en algún momento decidí poner todo ese conocimiento al servicio de algo que me importa profundamente: acompañar a otras madres desde el diseño.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UX Section - Centered Layout */}
      <section className="w-full py-32 px-8 md:px-20" style={{ backgroundColor: '#C4517A' }}>
        <div className="max-w-[1200px] mx-auto w-full flex justify-center">
          <div style={{ maxWidth: '700px', textAlign: 'center' }}>
            <h2 
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                color: '#F5EDE3',
                fontSize: '2.2rem',
                marginBottom: '32px'
              }}
            >
              ¿Qué es UX y por qué importa acá?
            </h2>
            <p 
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: '#F5EDE3',
                fontSize: '18px',
                lineHeight: 1.8
              }}
            >
              UX significa experiencia del usuario. Es la disciplina que estudia cómo se siente alguien cuando usa un producto: si lo entiende fácilmente, si le genera confianza, si resuelve lo que necesita o si lo deja confundido. No es solo que algo se vea lindo. Es que funcione, que tenga sentido, que acompañe a quien lo usa. En Remota Madre aplico esa misma lógica a los recursos para madres y niños: cada decisión de color, tipografía e ilustración tiene un por qué. Nada es decoración.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Cómo nació Remota Madre */}
      <section className="w-full py-32 px-8 md:px-20" style={{ backgroundColor: '#F5EDE3' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          <h2 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: '#1B2B4B',
              fontSize: '2.2rem',
              marginBottom: '48px'
            }}
          >
            Cómo nació Remota Madre
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p 
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: '#1B2B4B',
                fontSize: '18px',
                lineHeight: 1.7
              }}
            >
              Remota Madre nació de una necesidad concreta: había mucho de este tipo de diseño en el mercado, pero cuando lo probaba con mi hijo ninguno terminaba de funcionar. La tipografía decorativa que no se leía bien, las ilustraciones que no lo representaban, conceptos que visualmente no eran claros para su edad. Entonces decidí crear lo que necesitaba, teniendo en cuenta todos esos problemas. Lo empecé a usar con mi hijo y el cambio fue inmediato. Después lo probé con sobrinos e hijos de amigas, y el concepto cobró valor propio.
            </p>
            <p 
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: '#1B2B4B',
                fontSize: '18px',
                lineHeight: 1.7
              }}
            >
              Pero no termina acá. Cada producto vive y se actualiza: si lo comprás hoy, recibís todas las mejoras que vengan. Porque cuantas más madres lo usen, más voy a aprender y más voy a mejorar. Quiero estar para las madres cuyos hijos se salen de los libros, que necesitan herramientas reales para acompañar.
            </p>
          </div>
        </div>
      </section>

      {/* New Section - CTA to Shop */}
      <section className="w-full px-8 md:px-20" style={{ backgroundColor: '#1B2B4B', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1200px] mx-auto w-full flex justify-center">
          <div style={{ maxWidth: '600px', textAlign: 'center' }}>
            <p 
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#F5EDE3',
                fontSize: '1.6rem',
                lineHeight: 1.6,
                marginBottom: '40px'
              }}
            >
              Todo lo que encontrás en la tienda nació de este proceso.<br />Diseñado con intención, probado con amor.
            </p>
            <Link 
              to="/tienda"
              style={{ 
                display: 'inline-block',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: '#F5EDE3',
                backgroundColor: '#C94F2C',
                padding: '14px 32px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Ver productos
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 - Un límite importante */}
      <section className="w-full py-32 px-8 md:px-20" style={{ backgroundColor: '#E8C4B2' }}>
        <div className="max-w-[1200px] mx-auto w-full flex justify-center">
          <div style={{ maxWidth: '600px', textAlign: 'center' }}>
            <h2 
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                color: '#1B2B4B',
                fontSize: '2.2rem',
                marginBottom: '32px'
              }}
            >
              Un límite importante
            </h2>
            <p 
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: '#1B2B4B',
                fontSize: '18px',
                lineHeight: 1.8
              }}
            >
              Remota Madre no es un espacio de psicología ni de coaching. Es diseño con intención. Los recursos que encontrás acá están pensados para acompañar, facilitar y aliviar. Y si algo de lo que encontrás acá resuena profundo, no dudes en buscar ayuda profesional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}