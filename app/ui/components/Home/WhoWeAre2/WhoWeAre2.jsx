'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './whoWeAre2.module.css';




const WhoWeAre2 = () => {

    const [animate, setAnimate] = useState(false);

    const animationRef = useRef();


    useEffect(() => {

        const animationObserver = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
            setAnimate(true);
            } else {
            setAnimate(false);
            }
        },
        { threshold: 0 }
        );

        if (animationRef.current) {
        animationObserver.observe(animationRef.current);
        }

        return () => {

        if (animationRef.current) {
            animationObserver.unobserve(animationRef.current);
        }

        };

    }, [])


  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='quienes-somos'></div>
        <div className={styles.top}>
            {/* <h3 className={styles.topSubtitle}>QUIENES</h3> */}
            <h1 className={styles.topTitle}>QUIENES SOMOS</h1>
        </div>
        <div className={styles.bottom}>
            <div className={styles.wrapper} >
                {/* <div className={styles.right}>
                    <div className={`${styles.imgContainer} `}>
                        <Image src={Dra_Cristina_Cinque3} className={styles.img} alt='Dra. Cristina Cinque' priority/>
                    </div>
                </div> */}
                <div className={styles.left}>
                    {/* <h3 className={styles.subtitle}>QUIENES SOMOS</h3> */}
                    {/* <div className={styles.icon}>
                        <Image className={styles.img} src={Dra} alt='Blanqueamientos' />
                    </div>   */}
                    <h1 className={styles.title}>OD. CRISTINA CINQUE</h1>
                    <p className={styles.description} ref={animationRef}>
                        Odontóloga Cristina Cinque
                        Egresada de la UBA en el año 1985.
                        Especialista en odontopediatría.
                        Docente en la Cátedra Odontología Preventiva y Comunitaria (año 1985 a 2010). 
                        y en la Asociación Odontológica Argentina (año 2000 a 2010).
                        <br/>Titular de cursos de la especialidad. 
                    </p>
                </div>
            </div>
            <div className={styles.wrapper} >
                {/* <div className={styles.right}>
                    <div className={`${styles.imgContainer} `}>
                        <Image src={Dra_Cristina_Cinque3} className={styles.img} alt='Dra. Cristina Cinque' priority />
                    </div>
                </div> */}
                <div className={styles.left}>
                    {/* <h3 className={styles.subtitle}>QUIENES SOMOS</h3> */}
                    {/* <div className={styles.icon}>
                        <Image className={styles.img} src={Dr} alt='Blanqueamientos' />
                    </div>   */}
                    <h1 className={styles.title}>OD. E. J. BANFI</h1>
                    <p className={styles.description} ref={animationRef}>
                        Odontólogo E. J. Banfi
                        Egresada de la UBA en el año 1985.
                        Docente auxiliar en Prótesis de mediana y alta complejidad - USAL
                        35 años en Rehabilitación Oral en clínicas y consultorio privado.
                        Expositor en Congresos.
                        Rehabilitación Oral analógica y digital - Función y estética.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre2
