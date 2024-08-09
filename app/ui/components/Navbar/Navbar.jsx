'use client'

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname, useRouter } from 'next/navigation';
import Cristina_Cinque_Logo from '../../../../public/images/LOGOCC.png';






const Navbar = () => {

    const [navHeight, setNavHeight] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(true);

    const pathname = usePathname();
    
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


    useEffect(() => {
      setDisplayMenu(true);
    }, [pathname]);


    const toggleMenu = (e) => {
      e.preventDefault()
      setDisplayMenu(!displayMenu)
    }


    return (
      <div className={`${styles.container} ${navHeight ? styles.containerHeight : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
              <div className={styles.burger} onClick={e => toggleMenu(e)}> 
                <div className={styles.menuItem}>
                  {displayMenu ?  <MenuIcon color="#fff" style={{fontSize: 'inherit'}} /> 
                              :  <CloseIcon color="#fff" style={{fontSize: 'inherit'}} /> }
                </div>
              </div>
              <Link href='/'>
                  <h1 className={styles.title}>Cristina Cinque</h1>
                  <Image className={styles.logoNavbar} src={Cristina_Cinque_Logo} alt='Cristina_Cinque_Logo' width={'auto'} height={navHeight ? 50 : 70} priority />
              </Link>
          </div>
          <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
              <Link href='#inicio' className={styles.link}>Inicio</Link>
              <Link href='#quienes-somos' className={styles.link}>Quiénes Somos</Link>
              <Link href='#objetivos' className={styles.link}>Objetivos</Link>
              <Link href='#consultorio' className={styles.link}>Consultorio</Link>
              <Link href='#contacto' className={`${styles.button}`}>Contactanos</Link>
          </div>
        </div>
      </div>
    )
}

export default Navbar
