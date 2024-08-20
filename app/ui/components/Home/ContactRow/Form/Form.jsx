'use client'

import styles from './form.module.css';




const Form = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        return console.log(data)
    
    };



  return (
    <form className={styles.form} onSubmit={handleSubmit} id='form'>
        <div className={styles.top}>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor='name'>Nombre</label>
                <input className={styles.input} id='name' type="text" name='name' required />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor='surname'>Apellido</label>
                <input className={styles.input} id='surname' type="text" name='surname' required />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor='email'>E-Mail</label>
                <input className={styles.input} id='email' type="email" name='email' required />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor='phone'>Telefono</label>
                <input className={styles.input} id='phone' type="number" name='phone' required  />
            </div>
        </div>
        <div className={styles.formItem}>
            <label className={styles.label} htmlFor='message'>Mensaje</label>
            <textarea className={styles.textarea} id='message' type="text" name='message' required />
        </div>
        <button className={styles.button} type='submit' form='form' >ENVIAR</button>
    </form>
  )
}

export default Form
