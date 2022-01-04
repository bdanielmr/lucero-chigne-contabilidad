/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomAtencionWork.module.scss';
function CustomAtencionWork(props) {
  return (
    <div className={styles['custom-attention-work']}>
      <div className={styles['custom-attention-work-container']}>
        <div className={styles['custom-attention-work-container-item']}>
          <p style={{ 'margin-bottom': '0' }}>Atencion al Cliente</p>
          <span style={{ 'font-weight': '600', color: '#4348ca', margin: '0', fontSize: '22px' }}>
            <a className={styles['clock-icon']}></a>356dias
          </span>
        </div>
        <div className={styles['custom-attention-work-container-item']}>
          <p style={{ 'margin-bottom': '0' }}>Clientes</p>
          <span style={{ 'font-weight': '600' }}>
            satisfechos <a className={styles['corazon-icon']}></a>
          </span>
        </div>
        <div className={styles['custom-attention-work-container-item']}>
          <p style={{ 'margin-bottom': '0' }}>Empresa verde</p>
          <span style={{ color: '#4348ca', 'font-weight': '600' }}>
            <a className={styles['heart-icon']}></a>100%
          </span>
        </div>
      </div>
    </div>
  );
}

CustomAtencionWork.propTypes = {};

export default CustomAtencionWork;
