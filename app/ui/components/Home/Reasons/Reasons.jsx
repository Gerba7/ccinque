import Image from 'next/image';
import MiniSlider from './MiniSlider/MiniSlider';
import styles from './reasons.module.css';
import Reasons_Cover from '../../../../../public/images/braggio_cover_open.jpg'


const Reasons = () => {
  return (
    <div className={styles.container}>
        {/* <div className={styles.background}>
          <Image className={styles.backgroundImage} src={Reasons_Cover} alt='Sabbia cover' priority />
        </div> */}
        <div className={styles.slider}>
            <MiniSlider />
        </div>
    </div>
  )
}

export default Reasons
