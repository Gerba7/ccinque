'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './whoWeAre.module.css';
import Image from 'next/image';
import Dra_Cristina_Cinque from '../../../../../public/images/Dra_Cristina_Cinque.jpg';
import Dra_Cristina_Cinque3 from '../../../../../public/images/Dra_Cristina_Cinque3.jpg';




const WhoWeAre = () => {

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
        <div className={styles.wrapper} >
            <div className={styles.left}>
                <h3 className={styles.subtitle}>QUIENES SOMOS</h3>
                <h1 className={styles.title}>Dra. Cristina Cinque</h1>
                <p className={styles.description} ref={animationRef}>
                    Odontologa Cristina Cinque
                    Egresada de la uba en el año 1985.
                    Especialista en odontopediatria.
                    Docente en la cátedra de odontologia preventiva y comunitaria (año 1985 a 2010) y en la asociación Odontologica argentina (año 2000 a 2010).
                    Titular de cursos de la especialidad. 
                </p>
            </div>
            <div className={styles.right}>
            </div>
        </div>
        <div className={`${styles.imgContainer} ${animate ? styles.slideIn : ''}`}>
            <Image src={Dra_Cristina_Cinque3} className={styles.img} alt='Dra. Cristina Cinque' priority height={1000} />
        </div>
    </div>
  )
}

export default WhoWeAre
