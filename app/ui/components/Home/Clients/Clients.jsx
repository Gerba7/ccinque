import styles from './clients.module.css';
import Image from 'next/image';
import Link from 'next/link';
import PWC from '../../../../../public/images/pwc.webp';
import Bice from '../../../../../public/images/bice.webp';
import TGS from '../../../../../public/images/tgs.webp';
import Claro from '../../../../../public/images/claro.webp';
import Excel from '../../../../../public/images/excel.webp';
import Manpower from '../../../../../public/images/manpower.webp';




const Clients = () => {

    const images = [
        {
            id: '664f7f03d3b51abf3c87a5a5',
            name: 'PWC',
            src: PWC
        },
        {
            id: '664f822ad3b51abf3c87a5b7',
            name: 'Bice',
            src: Bice
        },
        {
            id: '664f822ad3b51abf3c87a5b9',
            name: 'TGS',
            src: TGS
        },
        {
            id: '664f822ad3b51abf3c87a5bb',
            name: 'Claro',
            src: Claro
        },
        {
            id: '664f822ad3b51abf3c87a5bd',
            name: 'Excel',
            src: Excel
        },
        {
            id: '664f822bd3b51abf3c87a5bf',
            name: 'Manpower',
            src: Manpower
        },
    ]



  return (
    <div className={styles.container}>
        {/* <div className={styles.top}>
            <h3 className={styles.title}>CLIENTES</h3>
            <p className={styles.paragraph}>que confían</p>
        </div> */}
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.rowSlider}>
                    {images.map((img) => {
                        return(
                            <div key={img.id}>
                                <Image src={img.src} className={styles.logo} alt={img.name} height={100} />
                            </div>
                        )
                    })}
                    {images.map((img) => {
                        return(
                            <div key={img.id + 16}>
                                <Image src={img.src} className={styles.logo} alt={img.name} height={100} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        {/* <div className={styles.wrapper2}>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                </div>  
                <p className={styles.description}>
                    Innovamos en la formación de líderes dentro y fuera de las organizaciones, reinventando el concepto Líder.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                </div>
                <p className={styles.description}>
                    Diseñamos los talleres y programas, de acuerdo a las necesidades reales de cada cliente.
                </p>
                <h5 className={styles.serviceTitle}>CUSTOMIZACIÓN</h5>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                </div>
                <p className={styles.description}>
                    En todas nuestras actividades integramos los nuevos descubrimientos de la Ciencia y el estudio del Ser Integral.
                </p>
                <h5 className={styles.serviceTitle}>INTEGRACIÓN</h5>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                </div>
                <p className={styles.description}>
                    En todas nuestras actividades integramos los nuevos descubrimientos de la Ciencia y el estudio del Ser Integral.
                </p>
                <h5 className={styles.serviceTitle}>INTEGRACIÓN</h5>
            </div>
        </div> */}
    </div>
  )
}

export default Clients
