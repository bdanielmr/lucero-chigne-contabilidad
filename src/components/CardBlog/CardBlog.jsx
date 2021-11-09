/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import styles from './cardBlog.module.scss';
const CardBlog = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.thumbnail}>
          <img
            className={styles.left}
            src="https://uneg.edu.mx/wp-content/uploads/2021/08/6.-contaduria-publica-como-profesion-min-scaled.jpg"
          />
        </div>
        <div className={styles.right}>
          <h1 style={{ fontSize: '16px' }}>¿Por qué es preciso contratar un contador?</h1>
          <div className={styles.author}>
            <img src="https://uneg.edu.mx/wp-content/uploads/2021/08/6.-contaduria-publica-como-profesion-min-scaled.jpg" />
            <p style={{ fontSize: '14px', margin: '0' }}>Lucero Chigne</p>
          </div>

          <p style={{ fontSize: '14px' }}>
            Magnesium is one of the six essential macro-minerals that is required by the body for energy production and
            synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is
            responsible for synthesis of your DNA and RNA...
          </p>
        </div>

        <div className={styles.fab}>
          <GoArrowDown />
        </div>
      </div>
    </>
  );
};

CardBlog.propTypes = {};

export default CardBlog;
