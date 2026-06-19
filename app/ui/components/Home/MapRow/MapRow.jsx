import React from 'react';
import styles from './mapRow.module.css';



const MapRow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <iframe 
          title="Inline Frame Map"
          src="https://www.google.com/maps?q=Palermo,%20Buenos%20Aires,%20Argentina&output=embed"
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
