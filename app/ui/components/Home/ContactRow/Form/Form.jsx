'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientSchema } from '@/app/lib/zod';
import { submitForm } from '@/app/lib/actions';
import styles from './form.module.css';

const Form = () => {
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(clientSchema) });

  const onSubmit = async (data) => {
    setFormError('');

    try {
      const response = await submitForm(data);

      if (response?.errors) {
        setFormError('Revisá los campos marcados e intentá nuevamente.');
        return;
      }

      setSent(true);
      reset();
    } catch {
      setFormError('No pudimos enviar el mensaje. Intentá nuevamente en unos minutos.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} id='form' noValidate>
      <div className={styles.top}>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor='name'>Nombre</label>
          <input
            id='name'
            className={styles.input}
            type='text'
            autoComplete='given-name'
            aria-invalid={errors?.name ? 'true' : 'false'}
            aria-describedby={errors?.name ? 'name-error' : undefined}
            {...register('name')}
          />
          <p id='name-error' className={styles.error} aria-live='polite'>{errors?.name?.message}</p>
        </div>

        <div className={styles.formItem}>
          <label className={styles.label} htmlFor='surname'>Apellido</label>
          <input
            id='surname'
            className={styles.input}
            type='text'
            autoComplete='family-name'
            aria-invalid={errors?.surname ? 'true' : 'false'}
            aria-describedby={errors?.surname ? 'surname-error' : undefined}
            {...register('surname')}
          />
          <p id='surname-error' className={styles.error} aria-live='polite'>{errors?.surname?.message}</p>
        </div>

        <div className={styles.formItem}>
          <label className={styles.label} htmlFor='email'>E-mail</label>
          <input
            id='email'
            className={styles.input}
            type='email'
            autoComplete='email'
            aria-invalid={errors?.email ? 'true' : 'false'}
            aria-describedby={errors?.email ? 'email-error' : undefined}
            {...register('email')}
          />
          <p id='email-error' className={styles.error} aria-live='polite'>{errors?.email?.message}</p>
        </div>

        <div className={styles.formItem}>
          <label className={styles.label} htmlFor='phone'>Teléfono</label>
          <input
            id='phone'
            className={styles.input}
            type='tel'
            inputMode='tel'
            autoComplete='tel'
            aria-invalid={errors?.phone ? 'true' : 'false'}
            aria-describedby={errors?.phone ? 'phone-error' : undefined}
            {...register('phone')}
          />
          <p id='phone-error' className={styles.error} aria-live='polite'>{errors?.phone?.message}</p>
        </div>
      </div>

      <div className={styles.formItem}>
        <label className={styles.label} htmlFor='message'>Mensaje</label>
        <textarea
          id='message'
          className={styles.textarea}
          autoComplete='off'
          aria-invalid={errors?.message ? 'true' : 'false'}
          aria-describedby={errors?.message ? 'message-error' : undefined}
          {...register('message')}
        />
        <p id='message-error' className={styles.error} aria-live='polite'>{errors?.message?.message}</p>
      </div>

      {formError ? <p className={styles.formError} aria-live='polite'>{formError}</p> : null}

      {isSubmitting ? (
        <button className={styles.disabled} disabled type='submit'>ENVIANDO...</button>
      ) : sent ? (
        <button className={`${styles.button} ${styles.success}`} disabled type='button'>ENVIADO</button>
      ) : (
        <button className={styles.button} type='submit'>ENVIAR</button>
      )}
    </form>
  );
};

export default Form;
