/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './customOpenMenu.module.scss';
import NavListItem from 'components/NavListItem';

const CustomOpenMenu = ({ navigation, showMenu }) => {
  return (
    <label className={styles.labelMenuOpen}>
      {navigation?.map((listItem) => {
        return <NavListItem key={listItem.id} item={listItem} />;
      })}
    </label>
  );
};

CustomOpenMenu.propTypes = {};

export default CustomOpenMenu;
