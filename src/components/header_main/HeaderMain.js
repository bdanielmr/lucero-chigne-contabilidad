/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styles from './HeaderMain.module.scss';
const HeaderMain = (props) => {
  return (
    <div className={styles['div-header-main-container']}>
      <img width="234px" height="83px" src="https://i.imgur.com/PzAc9ya.png" />
      <p>Contabilidad para todos</p>
    </div>
  );
};

HeaderMain.propTypes = {};

export default HeaderMain;
