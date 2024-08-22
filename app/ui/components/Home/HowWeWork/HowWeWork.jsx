'use client'

import Link from 'next/link';
import styles from './howWeWork.module.css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Consultorio from '../../../../../public/images/Consultorio.jpg';
import Doctores from '../../../../../public/images/doctors1.png';
import Waves from '../../../../../public/images/wavesOpacity.svg';




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
      <div className={styles.scrollOffset} id='trayectoria'></div>
      {/* <div className={styles.back} /> */}
      <div className={styles.wrapper} ref={animationRef}>
        <div className={styles.top}>
            <h3 className={styles.subtitle}>NUESTRA</h3>
            <h1 className={styles.title}>TRAYECTORIA</h1>
        </div>
        <div className={styles.texts}>
          <p className={`${styles.paragraph1} ${animate ? styles.slideIn : ''}`}>Somos odontólogos egresados de la UBA,</p>
          {/* <h2 className={`${styles.titles} ${animate ? styles.slideIn : ''}`}></h2> */}
          <p className={`${styles.paragraph2} ${animate ? styles.slideIn : ''}`}>especialistas en distintas áreas, comprometidos</p>
          {/* <h2 className={`${styles.titles2} ${animate ? styles.slideIn : ''}`}></h2> */}
          <p className={`${styles.paragraph3} ${animate ? styles.slideIn : ''}`}>con capacitaciones constantes para lograr la mejor atención.</p>
        </div>
        <Link href='#contacto' className={styles.button}>Contactanos</Link>
        {/* <hr className={`${styles.hr} ${animate ? styles.width : ''}`} /> */}
      </div>
      <div className={styles.right}>
        <div className={styles.wrapperRight}>
          <Image src={Doctores} className={styles.img} alt='doctores' />
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
