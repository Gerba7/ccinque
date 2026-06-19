'use client'

import styles from './cover.module.css';
import Image from 'next/image';
import Link from 'next/link';
import CoverImg from '../../../../../public/images/cover2.png';
import { Great_Vibes } from 'next/font/google';
import { useEffect, useState } from 'react';
import Logo from '../../../../../public/images/LOGOMob.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const greatv = Great_Vibes({ subsets: ["latin"], display: 'swap', weight: ['400'], });



const Cover = () => {

  const [navHeight, setNavHeight] = useState(false);
    
    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setNavHeight(true);
        } else {
            setNavHeight(false);
        }
    };

    useEffect(() => {

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <div className={styles.container}>
      <div className={`${styles.coverLogo} ${navHeight ? styles.move : ''}`}>
        <Image src={Logo} className={`${styles.img} ${navHeight ? styles.size : ''}`} alt='Odonto_Logo'/>
        {/* <h2 className={`${greatv.className} ${styles.title}`}>Dra. Cristina Cinque</h2> */}
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenido a <br/>tu consultorio <br/>odontológico</h1>
        <h3 className={styles.subtitle}>
          Atención odontológica integral para cuidar tu sonrisa con confianza, tecnología y calidez.
          Tratamientos personalizados para niños, adultos y familias.
        </h3>
        <Link href='#contacto' className={`${styles.button}`}>AGENDÁ TU TURNO</Link>
      </div>
      <div className={styles.slide}>
        <div className={styles.background}>
        {/* <video className={styles.video} width="100%" height="auto" preload="none" autoPlay loop muted playsInline>
          <source src={"/images/cover1.mp4"} type="video/mp4" />
        </video> */}
          <Image className={styles.backgroundImage} src={CoverImg} alt='Odonto' width={'100%'} height={'auto'} priority />
        </div>
      </div>
      <Link className={styles.link} href="#quienes-somos" aria-label='linkArrow'>
        <KeyboardArrowDownIcon color="#fff" style={{fontSize: 'inherit'}} sx={{boxShadow: 'theme.shadows[3]'}} />
      </Link>
    </div>
  )
}

export default Cover
