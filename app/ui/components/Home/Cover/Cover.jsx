import styles from './cover.module.css';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Cristina_Cinque_Cover from '../../../../../public/images/Cinque_Cover.jpg';
import Cristina_Cinque_Logo from '../../../../../public/images/LOGOCCWhite.png';
import { Great_Vibes } from 'next/font/google';


const greatv = Great_Vibes({ subsets: ["latin"], display: 'swap', weight: ['400'], });



const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={Cristina_Cinque_Cover} alt='Sabbia cover' width={'100%'} height={'auto'} priority />
        </div>
        <div className={styles.coverLogo}>
          <Image src={Cristina_Cinque_Logo} className={styles.img} alt='Cristina_Cinque_Logo' height={170} width={'auto'} />
          <h2 className={`${greatv.className} ${styles.title}`}>Dra. Cristina Cinque</h2>
        </div>
      </div>
      {/* <Link className={styles.link} href="#quienes-somos" aria-label='linkArrow'>
        <KeyboardArrowDownIcon color="#fff" style={{fontSize: 'inherit'}} sx={{boxShadow: 'theme.shadows[3]'}} />
      </Link> */}
    </div>
  )
}

export default Cover
