import styles from './footer.module.css';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Abya_Logo from '../../../../../public/images/abya_logo_dark.webp';




const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
            <Image src={Abya_Logo} alt='abya logo' width={100} height={100} />
            <div className={styles.socialContainer}>
                <a href='https://www.linkedin.com/in/sergio-braggio-a8a0155/?originalSubdomain=ar' className={`${styles.socialIcon} ${styles.linkedin}`}>
                    <LinkedInIcon fontSize='inherit' />
                </a>
                <a href='https://www.facebook.com/serbraggio' className={`${styles.socialIcon} ${styles.facebook}`}>
                    <FacebookIcon fontSize='inherit' />
                </a>
                <a href='https://www.instagram.com/serbraggio' rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instagram}`}>
                    <InstagramIcon fontSize='inherit' />
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
