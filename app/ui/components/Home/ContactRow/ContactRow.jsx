import styles from './contactRow.module.css';
import Form from './Form/Form';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';





const ContactRow = () => {


  return (
      <div className={styles.container} > 
        <div className={styles.scrollOffset} id='contacto'></div>
        <div className={styles.back} />
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.texts}>
              <h3 className={styles.title}>CONTACTO</h3>
              {/* <p className={styles.paragraph}>con nosotros</p> */}
            </div>
            <div className={styles.data}>
              <div className={styles.icon}>
                <EmailIcon sizeize={24} color='inherit' />
                <div className={styles.line}>
                  <h3 className={styles.subtitle}>EMAIL</h3>
                  <h4 className={styles.iconText}>dra.cinque@gmail.com</h4>
                </div>
              </div>
              <div className={styles.icon}>
                <LocalPhoneOutlinedIcon size={24} color='inherit' />
                <div className={styles.line}>
                  <h3 className={styles.subtitle}>TELEFONO</h3>
                  <h4 className={styles.iconText}>+54 9 11 4805 3974</h4>
                </div>
              </div>
              <div className={styles.icon}>
                <LocationOnIcon size={24} color='inherit' />
                <div className={styles.line}>
                  <h3 className={styles.subtitle}>DIRECCION</h3>
                  <h4 className={styles.iconText}>Aguero 2160 6 E</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Form />
          </div>
        </div>
      </div>
  )
}

export default ContactRow
