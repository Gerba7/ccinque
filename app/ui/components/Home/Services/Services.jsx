import styles from './services.module.css';
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
        <div className={styles.scrollOffset} id='servicios'></div>
        <div className={styles.background} />
        <div className={styles.top}>
            <h3 className={styles.subtitle}>NUESTROS</h3>
            <h1 className={styles.title}>SERVICIOS</h1>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Odontopediatria} alt='Odontopediatria' />
                </div>
                <h5 className={styles.serviceTitle}>ODONTOPEDIATRÍA</h5>
                <p className={styles.text}>
                    Actualmente se considera el crecimiento y desarrollo físico, 
                    mental y emocional de los niños como un todo, en el que el 
                    componente bucal tiene mucha importancia. El odontopediatra 
                    es responsable de la atencion integral del niño, priorizando 
                    la educación para la salud y la prevención, para lograr ese objetivo.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Blanqueamientos} alt='Blanqueamientos' />
                </div>  
                <h5 className={styles.serviceTitle}>BLANQUEAMIENTOS</h5>
                <p className={styles.text}>
                    Los blanqueamientos son tratamientos conservadores que surgen 
                    como respuesta a la necesidad de las personas de tener dientes blancos, 
                    algo que fue asi historicamnete. En el mercado hay diferentes productos 
                    blanqueadores que el odontólogo utilizará según la estrategia más conveniente.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Periodoncia} alt='Periodoncia' />
                </div>
                <h5 className={styles.serviceTitle}>PERIODONCIA</h5>
                <p className={styles.text}>
                    Esta rama de la odontología se ocupa del diagnóstico, prevención y 
                    tratamiento de las enfermedades que afectan la estructura de soporte 
                    de las piezas dentarias, logrando salud, función y estética.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Protesis} alt='Protesis' />
                </div>
                <h5 className={styles.serviceTitle}>PRÓTESIS</h5>
                <p className={styles.text}>
                    Esta especialidad rehabilita los problemas estomatognáticos de las 
                    personas que presentan pérdidas de piezas dentarias, devolviendo función 
                    y estética por medio de aparatología fija o removible.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Implantes} alt='Implantes' />
                </div>
                <h5 className={styles.serviceTitle}>IMPLANTES</h5>
                <p className={styles.text}>
                    Esta especialidad diagnostica, planifica y ejecuta a través de 
                    una cirugía, la colocación de implantes que reemplazarán las raíces 
                    de las piezas dentarias perdidas, sobre los cuales se colocará una 
                    prótesis fija o removible, otorgándole al paciente función masticatoria y estética.

                </p>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image className={styles.img} src={Estetica} alt='Estetica' />
                </div>
                <h5 className={styles.serviceTitle}>ESTÉTICA</h5>
                <p className={styles.text}>
                    La estética es la especialidad que soluciona los problemas de salud bucal sin dejar
                    de lado el valor de la estética y que gracias a la aparición de materiales de primera
                    generación y técnicas adecuadas el odontólogo ejecuta.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Value
