import styles from './value.module.css';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import GridViewIcon from '@mui/icons-material/GridView';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Link from 'next/link';
import Image from 'next/image';
import Decoration from '../../../../../public/images/decoration.png';
import Innovacion from '../../../../../public/images/innovacion.jpg';
import Customizacion from '../../../../../public/images/customizacion.jpg';
import Integracion from '../../../../../public/images/integracion.jpg';




const Value = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='valor'></div>
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestro</p>
            <h3 className={styles.title}>VALOR AGREGADO</h3>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} />
                <div className={styles.circleContainer}>
                    <Image src={Innovacion} className={styles.image} height={165} width={220} />
                </div>
                <h5 className={styles.serviceTitle}>INNOVACIÓN</h5>
                <p className={styles.description}>
                    Innovamos en la formación de líderes dentro y fuera de las organizaciones, reinventando el concepto Líder.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} />
                <div className={styles.circleContainer}>
                    <Image src={Customizacion} className={styles.image} height={165} width={220} />
                </div>
                <h5 className={styles.serviceTitle}>CUSTOMIZACIÓN</h5>
                <p className={styles.description}>
                    Diseñamos los talleres y programas, de acuerdo a las necesidades reales de cada cliente.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} />    
                <div className={styles.circleContainer}>
                    <Image src={Integracion} className={styles.image} height={165} width={220} />
                </div>
                <h5 className={styles.serviceTitle}>INTEGRACIÓN</h5>
                <p className={styles.description}>
                    En todas nuestras actividades integramos los nuevos descubrimientos de la Ciencia y el estudio del Ser Integral.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} />
                <div className={styles.circleContainer}>
                    <Image src={Innovacion} className={styles.image} height={165} width={220} />
                </div>
                <h5 className={styles.serviceTitle}>INNOVACIÓN</h5>
                <p className={styles.description}>
                    Innovamos en la formación de líderes dentro y fuera de las organizaciones, reinventando el concepto Líder.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} />
                <div className={styles.circleContainer}>
                    <Image src={Customizacion} className={styles.image} height={165} width={220} />
                </div>
                <h5 className={styles.serviceTitle}>CUSTOMIZACIÓN</h5>
                <p className={styles.description}>
                    Diseñamos los talleres y programas, de acuerdo a las necesidades reales de cada cliente.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} />    
                <div className={styles.circleContainer}>
                    <Image src={Integracion} className={styles.image} height={165} width={220} />
                </div>
                <h5 className={styles.serviceTitle}>INTEGRACIÓN</h5>
                <p className={styles.description}>
                    En todas nuestras actividades integramos los nuevos descubrimientos de la Ciencia y el estudio del Ser Integral.
                </p>
            </div>
        </div>
        <Link href='#contact' className={styles.button} >Contactanos</Link>
    </div>
  )
}

export default Value
