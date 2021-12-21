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
        <p>Contadora publica colegiada, empresaria y diseñadora grafica</p>
        <p>
          Con experiencia en temas tributarios, logisticos, financieros y laborales del pais en rubros comerciales,
          publicidad, marketing, transportes, asociaciones sin fines de lucro, servicios freelancer, inversiones
          digitales, entre otros. Especialista en tributación por el colegio de contadores de La Libertad - sede
          Trujillo
        </p>
      </label>
      <div>
        <img src="https://i.imgur.com/2tvIqhj.png" height="100%" />
      </div>
    </div>
  );
};

CustomInfoPersonalHome.propTypes = {};

export default CustomInfoPersonalHome;
