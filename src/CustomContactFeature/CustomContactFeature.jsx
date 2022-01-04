/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomContactFeature.module.scss';
function CustomContactFeature(props) {
  return (
    <div className={styles['contact-feature']}>
      <div className={styles['contact-feature-rigth']}>
        <img src="https://i.imgur.com/t7YwthJ.png" />
      </div>
      <div>
        <div className={styles['contact-feature-left-contienr']}>
          <h3 style={{ textAlign: 'center', margin: '0 0 13% 0' }}>Contacto</h3>
          <img src="https://i.imgur.com/4K4Ubdo.png" />
        </div>
        <div className={styles['contact-feature-left']}>
          <p>Para trabajar juntos me puedes contactar por estos medios:</p>
          <p>979979835</p>
          <p>l.chigne.m@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

CustomContactFeature.propTypes = {};

export default CustomContactFeature;
