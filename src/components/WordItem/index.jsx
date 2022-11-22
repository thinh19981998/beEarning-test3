import React from 'react';
import styles from './style.module.scss';

const WordItem = ({ index, name }) => {
  return (
    <li className={styles['wordItem']}>
      <span>{index}</span>
      {name}
    </li>
  );
};

export default WordItem;
