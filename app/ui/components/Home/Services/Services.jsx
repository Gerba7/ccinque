import styles from './services.module.css';
import Counter from './Counter/Counter';
import Image from 'next/image';
import Blanqueamientos from '../../../../../public/images/blanqueamientos.jpg';
import Implantes from '../../../../../public/images/implantes.png';
import Odontopediatria from '../../../../../public/images/odontopediatria.png';
import Periodoncia from '../../../../../public/images/periodoncia.png';
import Protesis from '../../../../../public/images/protesis.png';
import Estetica from '../../../../../public/images/restauracion.png';




const Value = () => {
  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='experiencia'></div>
        <div className={styles.background} />
        <div className={styles.top}>
            <h3 className={styles.subtitle}>Nuestros</h3>
            <h1 className={styles.title}>SERVICIOS</h1>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Odontopediatria} alt='Odontopediatria' />
                </div>
                <h5 className={styles.serviceTitle}>ODONTOPEDIATRÍA</h5>
                <p className={styles.text}>
                    La odontopediatría es la rama de la odontología que se 
                    dedica a la salud oral de los niños, desde el nacimiento 
                    hasta la adolescencia.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Blanqueamientos} alt='Blanqueamientos' />
                </div>  
                <h5 className={styles.serviceTitle}>BLANQUEAMIENTOS</h5>
                <p className={styles.text}>
                    El Blanqueamiento dental es posiblemente uno de los tratamientos 
                    de estética más demandado en la actualidad, en nuestra clínica 
                    disponemos de diferentes tipos de blanqueamiento.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Periodoncia} alt='Periodoncia' />
                </div>
                <h5 className={styles.serviceTitle}>PERIODONCIA</h5>
                <p className={styles.text}>
                Especialidad que cuida nuestra salud bucal, tratando enfermedades 
                que afectan nuestras encías, como sangrado, infecciones y retracciones. 
                Es fundamental para conservar nuestros dientes.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Protesis} alt='Protesis' />
                </div>
                <h5 className={styles.serviceTitle}>PRÓTESIS</h5>
                <p className={styles.text}>
                    Solucionamos la funcionalidad para masticar , logrando altos estándares de estética.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Implantes} alt='Implantes' />
                </div>
                <h5 className={styles.serviceTitle}>IMPLANTES</h5>
                <p className={styles.text}>
                    Los implantes dentales son raíces artificiales que se colocan 
                    en el hueso maxilar con el objetivo de reemplazar uno o más 
                    dientes perdidos, ya sea por periodontitis, caries o traumatismos.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Estetica} alt='Estetica' />
                </div>
                <h5 className={styles.serviceTitle}>ESTÉTICA</h5>
                <p className={styles.text}>
                    Los implantes dentales son raíces artificiales que se colocan 
                    en el hueso maxilar con el objetivo de reemplazar uno o más 
                    dientes perdidos, ya sea por periodontitis, caries o traumatismos.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Value
