import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.scss';
import Check from '../../asssets/icons/Vector.png';
import Down from '../../asssets/icons/Down.png';
const agreement = [
  'Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.',

  'Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.',

  'To keep your backup file safe, you should also keep secret your back up location and secure it.',
];

const CreateSuccessModal = ({ isShowing, hide }) => {
  const [checkedState, setCheckedState] = useState(new Array(agreement.length).fill(false));

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles['modal-overlay']} />
          <div
            className={styles['modal-wrapper']}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={styles['modal']}>
              <button
                type="button"
                className={styles['modal-close-button']}
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <img src={Down} alt="down" />
              </button>
              <img src={Check} alt="copy green" className={styles['copyImg']} />
              <p className={styles['modal-text']}>Your wallet has been created!</p>
              <form>
                {agreement.map((el, index) => (
                  <label className={styles['container']} key={index}>
                    {el}
                    <input
                      type="checkbox"
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                ))}

                <button
                  className={styles['submit']}
                  disabled={!checkedState.every((el) => el === true)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default CreateSuccessModal;
