'use client'

import { useState } from 'react';
import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientSchema } from '@/app/lib/zod';
import { submitForm } from '@/app/lib/actions';




const Form = () => {

    const [sent, setSent] = useState(false);

    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({ resolver: zodResolver(clientSchema) });

    const onSubmit = async (data) => {
        try {
            await submitForm(data);
            return setSent(true);
        } catch (error) {
            console.error("Form submission failed:", error);
        }
    };


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} id='form'>
        <div className={styles.top}>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor='name'>Nombre</label>
                <input className={styles.input} type="text" {...register("name")} required />
                <p className={styles.error}>{errors?.name?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor='surname'>Apellido</label>
                <input className={styles.input} type="text" {...register("surname")} required />
                <p className={styles.error}>{errors?.surname?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor='email'>E-Mail</label>
                <input className={styles.input} type="email" {...register("email")} required />
                <p className={styles.error}>{errors?.email?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor='phone'>Telefono</label>
                <input className={styles.input} type="number" {...register("phone")} min={0} required />
                <p className={styles.error}>{errors?.phone?.message}</p>
            </div>
        </div>
        <div className={styles.formItem}>
            <label className={styles.label} htmlFor='message'>Mensaje</label>
            <textarea className={styles.textarea} type="text" {...register("message")} required />
            <p className={styles.error}>{errors?.message?.message}</p>
        </div>
        {isSubmitting ?
            <button className={styles.disabled} disabled type='submit' form='form' >ENVIANDO...</button>
            :
            (sent ? 
                <button className={`${styles.button} ${styles.success}`} disabled type='submit' form='form' >ENVIADO</button>
                :
                <button className={styles.button} type='submit' form='form' >ENVIAR</button>
            )
        }
    </form>
  )
}

export default Form
