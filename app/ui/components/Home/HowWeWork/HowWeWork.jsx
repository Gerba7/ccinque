'use client'

import Link from 'next/link';
import styles from './howWeWork.module.css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Consultorio from '../../../../../public/images/Consultorio.jpg';




const HowWeWork = () => {


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
      {/* <div className={styles.back} /> */}
      <div className={styles.scrollOffset} id='quienes-somos'></div>
      <div className={styles.wrapper} ref={animationRef}>
        <h1 className={styles.title}>QUIENES SOMOS</h1>
        <div className={styles.texts}>
          <p className={`${styles.paragraph1} ${animate ? styles.slideIn : ''}`}>Somos un equipo de Odontologos egresados</p>
          {/* <h2 className={`${styles.titles} ${animate ? styles.slideIn : ''}`}></h2> */}
          <p className={`${styles.paragraph2} ${animate ? styles.slideIn : ''}`}>de la UBA especialistas en distintas áreas comprometidos</p>
          {/* <h2 className={`${styles.titles2} ${animate ? styles.slideIn : ''}`}></h2> */}
          <p className={`${styles.paragraph3} ${animate ? styles.slideIn : ''}`}>con capacitaciones constantes para lograr la mejor atención.</p>
        </div>
        <Link href='#contacto' className={styles.button}>Contactanos</Link>
        {/* <hr className={`${styles.hr} ${animate ? styles.width : ''}`} /> */}
      </div>
      <div className={styles.right}></div>
      <div className={styles.wrapperRight}>
        <Image src={Consultorio} className={styles.img} width={500} height={300} />
      </div>
    </div>
  )
}

export default HowWeWork
