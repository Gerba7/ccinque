'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './mission.module.css';



const Mission = () => {

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
    { threshold: 0.5 }
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
        <div className={styles.scrollOffset} id='objetivos'></div>
        <div className={styles.wrapper}>
            <h3 className={`${styles.subtitle} ${animate ? styles.visible : ''}`}>NUESTROS</h3>
            <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>OBJETIVOS</h1>
            <p className={`${styles.description} ${animate ? styles.visible : ''}`} ref={animationRef}>
              Nuestro principal objetivo es lograr una buena salud bucal en nuestros pacientes, 
              haciendo énfasis en la educación para la salud y en la prevención, 
              realizando constantes monitoreos en adultos y en niños. 
              Así mismo también se realizan tratamientos correctivos y restauradores 
              abarcando las distintas especialidades de la profesión.
            </p>
        </div>
    </div>
  )
}

export default Mission
