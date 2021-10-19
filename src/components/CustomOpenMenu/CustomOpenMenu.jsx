/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './customOpenMenu.module.scss';
import NavListItem from 'components/NavListItem';

const CustomOpenMenu = ({ navigation }) => {
  return (
    <label className={styles.labelMenuOpen}>
      <input className={styles.inputMenuOpen} type="checkbox" />
      <span className={styles.menu}>
        <span className={styles.hamburger}></span>
      </span>

      <ul className={styles.ulMenuOpen}>
        <p className={styles.aMenuOpen} href="#">
          {navigation?.map((listItem) => {
            return <NavListItem key={listItem.id} item={listItem} />;
          })}
        </p>
      </ul>
    </label>
  );
};

CustomOpenMenu.propTypes = {};

export default CustomOpenMenu;
