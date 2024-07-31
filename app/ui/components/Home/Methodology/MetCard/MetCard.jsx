'use client'

import Image from 'next/image';
import styles from './metCard.module.css';
import { useEffect, useRef, useState } from 'react';




const MetCard = ({number, title, img, subtitle, paragraph, color}) => {

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
    <div className={`${styles.card} ${animate ? styles.cardFadeIn : ''}`} ref={animationRef}>
        <div className={styles.start}>
            <div className={styles.number}>{number}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.triangle} />
        </div>
        <div className={`${styles.end} ${animate ? styles.endSlideRight : ''}`} style={{backgroundColor: color}}>
            <div className={styles.icon}>
                <Image src={img} width={64} height={64} />
            </div>
            <div className={styles.texts}>
                <h4 className={styles.subtitle}>{subtitle}</h4>
                <p className={styles.paragraph}>
                    {paragraph}
                </p>
            </div>
        </div>
    </div>
  )
}

export default MetCard
