import React from 'react';
import arrowLeft from '../../asssets/icons/arrowLeft.png';
import styles from './style.module.scss';

const GoBackButton = ({ onClick }) => {
  return (
    <button className={styles['goBackButton']} onClick={onClick}>
      <img src={arrowLeft} alt="arrow-left" />
      Create New Wallet
    </button>
  );
};

export default GoBackButton;
