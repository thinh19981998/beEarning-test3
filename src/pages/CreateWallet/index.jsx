import React, { useCallback, useState } from 'react';
import GoBackButton from '../../components/GoBackButton';
import WordList from '../../components/WordList';
import styles from './style.module.scss';
import CopyIcon from '../../asssets/icons/copy.png';
import ArrowRight from '../../asssets/icons/arrowRight.png';
import Warning from '../../asssets/icons/exclamation-triangle.png';
import { getArrayOf24Elements, getArrayOf6Elements } from '../../utils';
import useModal from '../../hooks/useModal';
import CopyModal from '../../components/CopyModal';
import ConFirmList from '../../components/ConFirmList';
import CreateSuccessModal from '../../components/CreateSuccessModal';

const arr1 = getArrayOf24Elements;

const arr2 = getArrayOf6Elements(arr1);

const CreateWallet = () => {
  const { isShowing: isShowCopyModal, toggle: toggleCopyModal } = useModal();
  const { isShowing: isShowSuccessModal, toggle: toggleSuccessModal } = useModal();
  const [seedPhrases, setSeedPhrases] = useState(arr1);
  const [gotoConFirm, setGoToConFirm] = useState(false);
  // const [confirmData, setConfirmData] = useState(getArrayOf6Elements(seedPhrases));
  const [validConFirm, setValidConFirm] = useState(true);
  // const confirmData = getArrayOf6Elements(seedPhrases);
  const confirmData = arr2;
  console.log(confirmData);

  const handleSetConfirmData = useCallback(
    (index, data) => {
      confirmData[index].insertedIndex = data;
      console.log(confirmData);
    },
    [confirmData]
  );

  const handleSubmit = () => {
    const bool = confirmData.every((item) => item.insertedIndex === item.primary);
    if (bool) {
      toggleSuccessModal();
    }
    setValidConFirm(bool);
  };

  const handleCopy = async () => {
    toggleCopyModal();
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(JSON.stringify(seedPhrases));
    } else {
      return document.execCommand('copy', true, JSON.stringify(seedPhrases));
    }
  };

  return (
    <>
      <GoBackButton onClick={() => setGoToConFirm(false)} />
      {!gotoConFirm ? (
        <>
          <p className={styles['text']}>Auto Gen Seed Phrase?</p>
          <WordList data={seedPhrases} />
          <div className={styles['copy']}>
            <p className={styles['text2']}>
              Tap to Copy or Carefully write down your seed phrase and store it in a safe place
            </p>
            <img src={CopyIcon} alt="copy" onClick={handleCopy} />
          </div>
          <div className={styles['text3']}>
            <span>How does this work?</span>
            <img src={ArrowRight} alt="arrow right" />
          </div>
          <button className={styles['button']} onClick={() => setGoToConFirm(true)}>
            Next
          </button>
        </>
      ) : (
        <>
          <p className={styles['text']}>Confirm Your Seed Phrase</p>
          <ConFirmList
            data={confirmData}
            seedPhrases={seedPhrases}
            handleSetConfirmData={handleSetConfirmData}
          />
          {!validConFirm && (
            <p className={styles['warning-text']}>
              <img src={Warning} alt="warning" />
              Wrong seed phrases. Please try again!
            </p>
          )}
          <div className={styles['text3']}>
            <span>How does this work?</span>
            <img src={ArrowRight} alt="arrow right" />
          </div>
          <button className={styles['button']} onClick={handleSubmit}>
            Submit
          </button>
        </>
      )}

      {isShowCopyModal && <CopyModal isShowing={isShowCopyModal} hide={toggleCopyModal} />}
      {isShowSuccessModal && (
        <CreateSuccessModal isShowing={isShowSuccessModal} hide={toggleSuccessModal} />
      )}
    </>
  );
};

export default CreateWallet;
