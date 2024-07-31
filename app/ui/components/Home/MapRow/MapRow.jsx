import React from 'react';
import styles from './mapRow.module.css';



const MapRow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <iframe 
          title="Inline Frame Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.664375858809!2d-58.404085224178864!3d-34.587357956634605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9c13c0a543%3A0xbd71f3b5f8c3599f!2sCinque%20Cristina!5e0!3m2!1ses!2sar!4v1722366005180!5m2!1ses!2sar" 
          width="100%" 
          height="100%" 
          loading="lazy" 
          style={{ border: 'none'}}
        />
      </div>
    </div>
  )
}

export default MapRow
