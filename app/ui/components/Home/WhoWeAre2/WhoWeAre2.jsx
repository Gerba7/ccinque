'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './whoWeAre2.module.css';
import Dr from '@/public/images/Dr1.png'
import Dr2 from '@/public/images/Dr2.png'
import Image from 'next/image';




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
            <h1 className={styles.topTitle}>QUIÉNES SOMOS</h1>
        </div>
        <div className={styles.bottom}>
            <div className={styles.wrapper} >
                {/* <div className={styles.right}>
                    <div className={`${styles.imgContainer} `}>
                        <Image src={Dra_Cristina_Cinque3} className={styles.img} alt='Dr' priority/>
                    </div>
                </div> */}
                <div className={styles.left}>
                    {/* <h3 className={styles.subtitle}>QUIENES SOMOS</h3> */}
                    <div className={styles.icon}>
                        <Image className={styles.img} src={Dr} alt='Blanqueamientos' />
                    </div>  
                    <h1 className={styles.title}>OD. VALERIA MORENO</h1>
                    <p className={styles.description} ref={animationRef}>
                        Odontóloga Valeria Moreno egresada de la UBA en el año 1992. 
                        <b> Especialista en Odontología Integral y Estética Dental. </b>
                        Se desempeñó como docente auxiliar en la Cátedra de Clínica 
                        Integrada durante más de 15 años y participó en programas 
                        de prevención bucal comunitaria. Titular de cursos orientados 
                        a estética, prevención y atención personalizada del paciente adulto.
                    </p>
                </div>
            </div>
            <div className={styles.wrapper} >
                {/* <div className={styles.right}>
                    <div className={`${styles.imgContainer} `}>
                        <Image src={Dr} className={styles.img} alt='Dr2' priority />
                    </div>
                </div> */}
                <div className={styles.left}>
                    {/* <h3 className={styles.subtitle}>QUIENES SOMOS</h3> */}
                    <div className={styles.icon}>
                        <Image className={styles.img} src={Dr2} alt='Blanqueamientos' />
                    </div>  
                    <h1 className={styles.title}>OD. MARTÍN ALVAREZ</h1>
                    <p className={styles.description} ref={animationRef}>
                        Odontólogo Martín Alvarez egresado de la Universidad del Salvador en el año 1990. 
                        <b> Especialista en Rehabilitación Oral, Prótesis fija y tratamientos restauradores </b> 
                        de mediana y alta complejidad. Más de 30 años de experiencia en clínicas odontológicas 
                        y consultorio privado. Expositor en jornadas profesionales sobre función, estética 
                        y planificación digital de tratamientos.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre2
