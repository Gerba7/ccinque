import styles from './mission.module.css';



const Mission = () => {
  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='objetivos'></div>
        <div className={styles.wrapper}>
            <h3 className={styles.subtitle}>NUESTROS</h3>
            <h1 className={styles.title}>Objetivos</h1>
            <p className={styles.description}>
              Nuestro principal objetivo es lograr una buena salud bucal en nuestros pacientes, 
              haciendo énfasis en la educación para la salud y en la prevención, 
              realizando constantes monitoreos en adultos y en niños. 
              Así mismo también se realizas tratamientos correctivos y restauradores 
              abarcando las distintas especialidades de la profesión.
            </p>
            <hr className={styles.hr} />
        </div>
    </div>
  )
}

export default Mission
