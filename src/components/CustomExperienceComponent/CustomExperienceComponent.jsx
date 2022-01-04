/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomExperienceComponent.module.scss';
function CustomExperienceComponent(props) {
  return (
    <div className={styles['grid-experiencie-container']}>
      <div className={styles['grid-experiencie']}>
        <h3>Experiencia</h3>
        <div className={styles['grid-experiencie-curve']}>
          <img src="https://i.imgur.com/4K4Ubdo.png" />
        </div>
      </div>
      <div className={styles['grid-experiencie-3x3']}>
        <img className={styles['grid-experiencie-3x3-item']} src="https://i.imgur.com/d7eFUJI.png" />
        <img className={styles['grid-experiencie-3x3-item']} src="https://i.imgur.com/O0ZUm7i.png" />
        <img className={styles['grid-experiencie-3x3-item']} src="https://i.imgur.com/ym7Me6U.png" />
        <img className={styles['grid-experiencie-3x3-item']} src="https://i.imgur.com/VJ2LfGC.png" />
        <img className={styles['grid-experiencie-3x3-item']} src="https://i.imgur.com/wmBo6Et.png" />
      </div>
    </div>
  );
}

CustomExperienceComponent.propTypes = {};

export default CustomExperienceComponent;
