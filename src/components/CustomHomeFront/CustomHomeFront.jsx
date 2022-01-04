/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomHomeFront.module.scss';
const CustomHomeFront = (props) => {
  return (
    <div className={styles['div-custom-home-main']}>
      <label>
        <img src="https://i.imgur.com/IcRGtUh.png" />
      </label>
      <div>
        <p>
          <a>En este espacio busco asesorarte y diseñar un plan estrategico para que puedas gestionar tus finanzas.</a>
        </p>
        <div className={styles['button-custom-info-personal']}>
          <button>Ver mas</button>
        </div>
      </div>
    </div>
  );
};

CustomHomeFront.propTypes = {};

export default CustomHomeFront;
