import Image from 'next/image';
import styles from './test.module.css';
import Doctores from '../../../../../public/images/doctors.png';



const Test = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src={Doctores} width={500} height={'auto'} />
        </div>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
      </div>
    </div>
  )
}

export default Test
