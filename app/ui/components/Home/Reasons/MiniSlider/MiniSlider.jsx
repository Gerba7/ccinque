'use client'

import React, { useEffect, useState } from 'react';
import styles from './miniSlider.module.css';
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RESULTADO from '../../../../../../public/images/resultados.webp';
import PROCESOS from '../../../../../../public/images/procesos.webp';
import DOMINIOS from '../../../../../../public/images/dominios.webp';
import METODOLOGIA from '../../../../../../public/images/metodologia.webp';
import CERTIFICACION from '../../../../../../public/images/certificacion.webp';
import MODELO from '../../../../../../public/images/modelo.webp';



const items = [
    {
      id: 0,
      title: 'RESULTADOS',
      img: RESULTADO,
      text: 'Porque sabemos que los resultados (personales y profesionales) cuantitativos, son el fiel reflejo de resultados previos cualitativos.',
    },
    {
      id: 1,
      title: 'PROCESOS',
      img: PROCESOS,
      text: 'Porque realizamos procesos de seguimiento posteriores a nuestros talleres y/o programas.',
    },
    {
      id: 2,
      title: 'DOMINIOS',
      img: DOMINIOS,
      text: 'Porque trabajamos con los 3 dominios de las personas, generando aprendizaje sustentable.',
    },
    {
      id: 3,
      title: 'METODOLOGÍA',
      img: METODOLOGIA,
      text: 'Porque tenemos una metodología transformacional, que permite hacer acciones nuevas.',
    },
    {
      id: 4,
      title: 'CERTIFICACIÓN',
      img: CERTIFICACION,
      text: 'Porque todos nuestros facilitadores están certificados en las disciplinas que enseñan.',
    },
    {
      id: 5,
      title: 'MODELO',
      img: MODELO,
      text: 'Porque utilizamos el modelo de aprendizaje experiencial, e-learning y blend.',
    },
]



const MiniSlider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : items?.length - 1)
        } else {
            setSlideIndex(slideIndex < items?.length - 1 ? slideIndex + 1 : 0)
        }

    }

    const carouselScroll = () => {

        if (slideIndex === items?.length - 1) {
            return setSlideIndex(0)
        }
        
        return setSlideIndex(slideIndex + 1)
    }


    useEffect(() => {
        
        const interval = setInterval(() => {carouselScroll()}, 5000)

        return () => clearInterval(interval)

    }, [slideIndex])




  return (
    <div className={styles.container}>
        <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => handleClick("left")}>
            <KeyboardArrowLeftIcon style={{color: '#f5f5f5'}} fontSize='inherit' />
        </div>
        <div className={styles.wrapper}>
            {items?.map((item, idx) => (
                <div className={styles.slide} key={idx} style={{ transform: `translate(-${slideIndex * 100}%)`}}>
                    <div className={styles.top}>
                            <p className={styles.paragraph}>Las razones por las que</p>
                            <h3 className={styles.titleTop}>somos tu mejor aliado</h3>
                    </div>
                    <div className={styles.triangle} />
                    <div className={styles.textContainer}>
                        <div className={styles.texts}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.text}>{item.text}</p>
                        </div>
                    </div>
                    <div className={styles.background}>
                        <Image src={item.img} className={styles.backgroundImg} alt='Casas' />
                    </div>
                </div>
            ))}
        </div>
        <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => handleClick("right")}>
            <KeyboardArrowRightIcon style={{color: '#f5f5f5'}} fontSize='inherit' />
        </div>
        <div className={styles.dotsContainer}>
            {items?.map((_, idx) => (
                <div key={idx} className={`${styles.dot} ${slideIndex === idx && styles.dotActive}`} onClick={() => setSlideIndex(idx)} />
            ))}
        </div>
    </div>
  )
}

export default MiniSlider
