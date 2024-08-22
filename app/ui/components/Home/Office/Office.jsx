'use client'

import Image from 'next/image';
import styles from './office.module.css';
import Consultorio from '../../../../../public/images/Consultorio.jpg';
import Consultorio2 from '../../../../../public/images/Dra_Cristina_Cinque3.jpg';
import { useEffect, useRef, useState } from 'react';




const Office = () => {

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
        <div className={styles.scrollOffset} id='consultorio'></div>
        <div className={styles.wrapper} ref={animationRef}>
            <div className={styles.left}>
                <div className={`${styles.imgContainer} ${animate ? styles.slideIn : ''}`}>
                    <Image src={Consultorio2} className={styles.img} alt='Dra. Cristina Cinque' priority />
                </div>
            </div>
            <div className={styles.right}>
                <h3 className={styles.subtitle}>Nuestro</h3>
                <h1 className={styles.title}>CONSULTORIO</h1>
                <p className={styles.description}>
                    Prestamos un servicio eficiente basado en nuestra amplía trayectoria profesional,
                    brindando la mejor asistencia de manera responsable, eficiente y profesional.  
                    Nuestras instalaciones y equipamineto son de última generación logrando así poder 
                    trabajar en un ambiente cálido y confortable para mayor tranquilidad de nuestros pacientes.
                    Contamos así mismo, con las medidas de bioseguridad vigentes para el ejercicio de la profesion.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Office
