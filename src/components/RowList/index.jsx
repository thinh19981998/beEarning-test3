import React, { useState } from 'react';
import styles from './style.module.scss';

function RowList({ data, handleSetConfirmData, seedPhrases, index }) {
  const [activeItem, setActiveItem] = useState('');
  const handleOnClick = (e) => {
    setActiveItem((prev) =>
      prev === e.target.getAttribute('value') ? '' : e.target.getAttribute('value')
    );
    handleSetConfirmData(index, +e.target.getAttribute('index'));
  };

  return (
    <div className={styles['row']}>
      <span className={styles['primary']}>{data.primary}</span>
      {data.list.map((item, index) => (
        <span
          className={`${styles['row-item']} ${styles[activeItem === item && 'active']}`}
          key={index}
          value={item}
          index={seedPhrases.find((el) => el.name === item).index}
          onClick={handleOnClick}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default RowList;
