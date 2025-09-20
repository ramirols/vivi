import React from 'react'
import LaserFlow from '../components/LaserFlow'
import { useRef } from 'react'
import SplitText from '../components/SplitText'
import { Link } from 'react-router-dom'
import Vivi from '../assets/vivi.jpg'

const Inicio = () => {
    const revealImgRef = useRef(null)
    const scrollRef = useRef(null)

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div
            style={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#060010'
            }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', `${x}px`);
                    el.style.setProperty('--my', `${y}px`);
                }
            }}
            onMouseLeave={() => {
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', '-9999px');
                    el.style.setProperty('--my', '-9999px');
                }
            }}
        >

            {/* LaserFlow cubriendo todo */}
            <LaserFlow
                horizontalBeamOffset={0.1}
                verticalBeamOffset={0.0}
                color="#673996"
            />

            <div
                ref={scrollRef}
                className="star-border"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '86%',
                    height: '60%',
                    backgroundColor: 'transparent',
                    borderRadius: '20px',
                    border: '2px solid #9260c3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: 'white',
                    fontSize: '5rem',
                    fontWeight: 'bold',
                    zIndex: 5,
                    padding: '2rem',
                    lineHeight: '1.5',
                    wordWrap: 'break-word',
                    whiteSpace: 'normal',
                    overflowY: 'auto'
                }}
            >
                <SplitText
                    text="PARA TI, LA NIÑA DE MIS SUEÑOS, TE AMO MUCHISIMO PRECIOSAAA, OJALA TE GUSTE"
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
                    onLetterAnimationComplete={handleAnimationComplete}
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', borderRadius: '20px', border: '2px solid #9260c3', paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingTop: '2px', paddingBottom: '2px', color: 'white', fontSize: '2rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', zIndex: 10 }}>
                    <Link to="/para-ti">
                        Ir
                    </Link>
                </div>
            </div>

            {/* Imagen con efecto reveal */}
            <img
                ref={revealImgRef}
                src={Vivi}
                alt="Reveal effect"
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '0%',
                    height: '100%',
                    zIndex: 5,
                    mixBlendMode: 'lighten',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                }}
            />
        </div>
    )
}

export default Inicio