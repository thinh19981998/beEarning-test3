import React from 'react';
import WordItem from '../WordItem';
import styles from './style.module.scss';

const WordList = ({ data }) => {
  console.log(data);
  return (
    <ul className={styles['wordList']}>
      {data.map((item) => (
        <WordItem key={item.index} index={item.index} name={item.name} />
      ))}
    </ul>
  );
};

export default WordList;
