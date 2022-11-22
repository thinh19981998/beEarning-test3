import React from 'react';
import { memo } from 'react';
import RowList from '../RowList';
import styles from './style.module.scss';

const ConFirmList = memo(({ data, handleSetConfirmData, seedPhrases }) => {
  return (
    <div className={styles['container']}>
      {data.map((item, index) => (
        <RowList
          data={item}
          index={index}
          key={index}
          handleSetConfirmData={handleSetConfirmData}
          seedPhrases={seedPhrases}
        />
      ))}
    </div>
  );
});

export default ConFirmList;
