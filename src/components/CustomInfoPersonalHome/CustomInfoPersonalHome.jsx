/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomInfoPersonalHome.module.scss';
const CustomInfoPersonalHome = (props) => {
  return (
    <div className={styles['div-custom-info-main']}>
      <label>
        <h2>Hola, mi nombre es Lucero Chigne</h2>
        <p style={{ background: '#4348ca', width: '80%', color: 'white', fontWeight: '700' }}>
          Contadora publica colegiada, empresaria y diseñadora grafica
        </p>
        <p>
          Con experiencia en temas tributarios,logísticos, financieros y laborales del país en rubros comerciales,
          publicidad, marketing, transportes, asociaciones sin fines de lucro, servicios freelancer, inversiones
          digitales, entre otros. Especialista en tributación por el colegio de contadores de La Libertad - sede
          Trujillo
        </p>
        <div className={styles['button-custom-info-main']}>
          <button>Ver mas</button>
        </div>
      </label>
      <div>
        <div className={styles['img-custom-info-main']}>
          <img src="https://i.imgur.com/4K4Ubdo.png" width="100%" height="55px" />
        </div>

        <img src="https://i.imgur.com/2tvIqhj.png" height="100%" />
      </div>
    </div>
  );
};

CustomInfoPersonalHome.propTypes = {};

export default CustomInfoPersonalHome;
