import styles from './cover.module.css';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Cristina_Cinque_Cover from '../../../../../public/images/Cinque_Cover.jpg';



const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={Cristina_Cinque_Cover} alt='Sabbia cover' priority />
        </div>
        <div className={styles.coverLogo}>
          <h2 className={styles.title}>Consultorio</h2>
          <h2 className={styles.title}>Odontológico</h2>
        </div>
      </div>
      {/* <Link className={styles.link} href="#quienes-somos" aria-label='linkArrow'>
        <KeyboardArrowDownIcon color="#fff" style={{fontSize: 'inherit'}} sx={{boxShadow: 'theme.shadows[3]'}} />
      </Link> */}
    </div>
  )
}

export default Cover
