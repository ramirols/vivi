import React, { useState, useEffect } from 'react'
import LightRays from '../components/LightRays'
import SplitText from '../components/SplitText'
import CircularGallery from '../components/CircularGallery'
import { Link } from 'react-router-dom'

const ParaTi = () => {
  const [ready, setReady] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // 🔹 Activa el "ready" después de 1s
    const readyTimer = setTimeout(() => setReady(true), 1000)
    // 🔹 Activa el texto después de 1.2s
    const textTimer = setTimeout(() => setShowText(true), 1200)

    return () => {
      clearTimeout(readyTimer)
      clearTimeout(textTimer)
    }
  }, [])

  if (!ready) {
    // Loader temporal o pantalla vacía
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        Cargando...
      </div>
    )
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* 🔹 Fondo con rayos */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#673996"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />

      {/* 🔹 Texto centrado en frente */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '90%',
          maxWidth: '1200px'
        }}
      >

        <div className="flex flex-col items-center">
          {showText && (
            <SplitText
              text="He llegado a darme cuenta de que lo que siento por ti va más allá de lo que se ve a simple vista. No me enamoré solo de tu sonrisa o de tu forma de reír, sino de tu alma, de tu fuerza para enfrentar sola tantos problemas, de tu dulzura que se asoma incluso en los momentos más difíciles, y de esos detalles que te hacen ser tú, con tus virtudes y también con tus defectos.

Quiero que sepas que de verdad espero con ansias el día en que regreses a Perú para cumplir esa cita que tanto te prometí, porque no se trata de un simple encuentro, sino de mostrarte que quiero dar lo mejor de mí contigo. Mi propósito nunca será lastimarte, sino que te sientas amada, protegida y acompañada en cada paso, en lo bueno y en lo malo.

Quiero estar presente en tus logros, en tus luchas, en tus días grises y en tus días llenos de luz, porque tú eres esa luz, eres mi camino. Cuando estoy contigo, soy yo en mi versión más auténtica, y el tiempo parece volar, las horas se sienten como segundos. Ojalá puedas imaginar lo que sería enamorarte como yo lo hice de ti, porque te aseguro que es una sensación única.

No quiero esperar mucho más para empezar a construir esto contigo. Te escucho y pienso en cuánto brillo llevarías en tu rostro, en lo gloriosa que es tu mirada, en que eres mi ángel de luz. Sé que eres fuerte y capaz de enfrentar cualquier reto, pero también quiero ser esa persona que esté a tu lado para que nunca tengas que cargar sola con todo.

Lo único que me duele es imaginar lágrimas en tus ojos, porque cada una de ellas también me duele a mí. No quiero perderte por nada en el mundo… porque te amo demasiado, y lo único que quiero es que podamos empezar a caminar juntos en esta historia.

Quiero ser ese lugar seguro al que siempre puedas volver, esa voz que te calme cuando el mundo te grite demasiado fuerte, ese abrazo que te devuelva la paz cuando sientas que todo pesa. Quiero que conmigo encuentres un espacio donde seas libre de ser tú misma, sin miedo, sin máscaras, sin dudas.

Porque contigo no busco algo pasajero, no busco un juego ni un capricho. Contigo quiero construir algo verdadero, algo que dure, algo que tenga sentido. Quiero que seas tú quien me acompañe en cada amanecer, tú quien me inspire a ser mejor, tú quien le dé razón a mis días.

Si pudiera elegir entre miles de caminos, siempre elegiría el que me lleve hacia ti. Porque desde que llegaste a mi vida todo es distinto, siento que el destino nos unió de una manera inexplicable, y no quiero desperdiciar ni un segundo más sin demostrártelo.

            Así que aquí estoy, abriendo mi corazón sin miedo, diciéndote con toda sinceridad que te amo, que quiero que seas mi chica, que no quiero perder la oportunidad de hacerte feliz y de compartir mi vida contigo. Eres lo más hermoso que me ha pasado, y lo único que deseo es que podamos brillar juntos, porque sé que contigo todo vale la pena. Y todo esto tiene que esperar, pero voy a tratar siempre de hacerte recordar lo que significas para mí"
              className="font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          )}
          <div style={{ height: '200px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          </div>

          <div style={{ height: '200px', position: 'relative', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '2rem' }}>¿?</h1>
            <Link to="https://youtu.be/ubJff-b6sMo?si=LTFCjcRTauXFsoYW" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', color: '#ffffff', fontSize: '2rem', backgroundColor: '#673996', padding: '1rem', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease', display: 'block', margin: '0 auto', marginTop: '1rem' }}>
              Dame click
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParaTi