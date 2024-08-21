'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './attend.module.css';
import OSDE from '../../../../../public/images/Logo_OSDE.png';
import Image from 'next/image';



const Attend = () => {

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
            <h3 className={`${styles.subtitle} ${animate ? styles.visible : ''}`}>ATENDEMOS CON</h3>
            {/* <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>OBJETIVOS</h1> */}
            <Image src={OSDE} className={styles.img} alt='OSDE' />
        </div>
    </div>
  )
}

export default Attend
